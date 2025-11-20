package com.motorpoint.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String rol;           // e.g. "ROLE_USER"
    private long expiresInMillis;
}