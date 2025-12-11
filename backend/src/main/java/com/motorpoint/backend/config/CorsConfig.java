package com.motorpoint.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

/**
 * Configuración de CORS (Cross-Origin Resource Sharing)
 * Soporta patrones con wildcards para permitir dominios dinámicos
 */
@Configuration
public class CorsConfig {

    @Value("${cors.allowed-origins}")
    private String allowedOrigins;

    @Value("${cors.allowed-methods}")
    private String allowedMethods;

    @Value("${cors.allowed-headers}")
    private String allowedHeaders;

    @Value("${cors.allow-credentials}")
    private boolean allowCredentials;

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // Configurar orígenes permitidos (soporta wildcards)
        List<String> origins = Arrays.asList(allowedOrigins.split(","));
        configuration.setAllowedOriginPatterns(origins);

        // Configurar métodos HTTP permitidos
        List<String> methods = Arrays.asList(allowedMethods.split(","));
        configuration.setAllowedMethods(methods);

        // Configurar headers permitidos
        if ("*".equals(allowedHeaders.trim())) {
            configuration.addAllowedHeader("*");
        } else {
            List<String> headers = Arrays.asList(allowedHeaders.split(","));
            configuration.setAllowedHeaders(headers);
        }

        // Permitir credenciales (cookies, authorization headers)
        configuration.setAllowCredentials(allowCredentials);

        // Exponer headers de respuesta (útil para JWT en headers)
        configuration.addExposedHeader("Authorization");
        configuration.addExposedHeader("Content-Type");

        // Aplicar configuración a todas las rutas
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
