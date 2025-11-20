package com.motorpoint.backend.repository;

import com.motorpoint.backend.entity.Rol;
import com.motorpoint.backend.entity.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolRepository extends JpaRepository<Rol, Long> {
    Optional<Rol> findByNombre(RoleName nombre);
}