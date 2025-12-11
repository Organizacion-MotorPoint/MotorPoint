package com.motorpoint.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "usuarios")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Usuario {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Rol rol;

    private boolean verificado;

    private String verificationCode;

    // Método helper para obtener el nombre del rol
    public String getRolNombre() {
        return rol.getNombre().name(); // devuelve "ROLE_USER" o "ROLE_ADMIN"
    }
}