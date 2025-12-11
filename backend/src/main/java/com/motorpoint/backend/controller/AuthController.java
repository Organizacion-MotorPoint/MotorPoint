package com.motorpoint.backend.controller;

import com.motorpoint.backend.dto.request.LoginRequest;
import com.motorpoint.backend.dto.request.RegisterRequest;
import com.motorpoint.backend.dto.request.VerifyRequest;
import com.motorpoint.backend.dto.response.AuthResponse;
import com.motorpoint.backend.entity.Rol;
import com.motorpoint.backend.entity.RoleName;
import com.motorpoint.backend.entity.Usuario;
import com.motorpoint.backend.repository.RolRepository;
import com.motorpoint.backend.repository.UsuarioRepository;
import com.motorpoint.backend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final BCryptPasswordEncoder encoder;
    private final UsuarioRepository usuarioRepository;
    private final RolRepository rolRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
    if (usuarioRepository.existsByEmail(req.getEmail())) {
        return ResponseEntity.badRequest().body("Email ya registrado");
    }
    if (!req.getPassword().equals(req.getConfirmPassword())) {
        return ResponseEntity.badRequest().body("Las contraseñas no coinciden");
    }

    Rol rolUser = rolRepository.findByNombre(RoleName.ROLE_USER)
            .orElseThrow(() -> new RuntimeException("Rol USER no encontrado en la base de datos"));

    String verificationCode = String.format("%06d", new Random().nextInt(999999));

    Usuario u = Usuario.builder()
            .nombre(req.getName())
            .email(req.getEmail())
            .password(encoder.encode(req.getPassword()))
            .rol(rolUser)
            .verificado(false)
            .verificationCode(verificationCode)
            .build();

    usuarioRepository.save(u);

    return ResponseEntity.ok("Usuario registrado. Código de verificación: " + verificationCode);
}

    @PostMapping("/verify")
    public ResponseEntity<?> verify(@RequestBody VerifyRequest req) {
        Usuario u = usuarioRepository.findByEmail(req.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!u.getVerificationCode().equals(req.getVerificationCode())) {
            return ResponseEntity.badRequest().body("Código de verificación inválido");
        }

        u.setVerificado(true);
        usuarioRepository.save(u);

        return ResponseEntity.ok("Cuenta verificada correctamente");
    }

   @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest req) {
    Usuario u = usuarioRepository.findByEmail(req.getEmail())
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

    if (!u.isVerificado()) {
        return ResponseEntity.status(403).body("Cuenta no verificada");
    }

    authManager.authenticate(new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword()));

    String token = jwtUtil.generateToken(u.getEmail(), u.getRolNombre());
    return ResponseEntity.ok(new AuthResponse(token, u.getRolNombre(), jwtUtil.getExpirationMillis()));
}
}