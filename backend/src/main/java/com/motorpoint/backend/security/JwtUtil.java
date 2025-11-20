package com.motorpoint.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwtUtil {
    private final Key key = Keys.hmacShaKeyFor("cambia-esta-clave-secreta-larga-y-segura-1234567890".getBytes());
    private final long expirationMillis = 86400000; // 1 día

    public String generateToken(String subjectEmail, String rolNombre) {
        long now = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(subjectEmail)
                .addClaims(Map.of("role", rolNombre))
                .setIssuedAt(new Date(now))
                .setExpiration(new Date(now + expirationMillis))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isValid(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException ex) {
            return false;
        }
    }

    public String getSubject(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public long getExpirationMillis() {
        return expirationMillis;
    }
}