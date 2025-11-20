package com.motorpoint.backend.service;


import com.motorpoint.backend.entity.Usuario;

public interface UsuarioService {
    Usuario registrar(Usuario usuario);
    Usuario buscarPorEmail(String email);
}