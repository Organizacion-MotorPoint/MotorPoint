import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { Car, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Car />
              </div>
              <span className="footer-logo-text">
                Motor<span className="highlight">Point</span>
              </span>
            </Link>

            <p className="footer-description">
              Tu tienda de confianza para repuestos y accesorios. Calidad garantizada desde 2020.
            </p>

            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Facebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Instagram /></a>
            </div>
          </div>

          {/* Productos */}
          <div className="footer-section">
            <h3 className="footer-section-title">Productos</h3>
            <ul className="footer-section-list">
              <li><Link className="footer-section-link" to="/productos/autos">Repuestos Autos</Link></li>
              <li><Link className="footer-section-link" to="/productos/motos">Repuestos Motos</Link></li>
              <li><Link className="footer-section-link" to="/catalogo">Catálogo</Link></li>
              <li><Link className="footer-section-link" to="/ofertas">Ofertas</Link></li>
            </ul>
          </div>

          {/* Compañia */}
          <div className="footer-section">
            <h3 className="footer-section-title">Empresa</h3>
            <ul className="footer-section-list">
              <li><Link to="/nosotros" className="footer-section-link">Nosotros</Link></li>
              <li><Link to="/tiendas" className="footer-section-link">Tiendas</Link></li>
              <li><Link to="/contacto" className="footer-section-link">Contacto</Link></li>
            </ul>
          </div>

          {/* Soporte */}
          <div className="footer-section">
            <h3 className="footer-section-title">Soporte</h3>
            <ul className="footer-section-list">
              <li><Link to="/envios" className="footer-section-link">Envíos</Link></li>
              <li><Link to="/garantias" className="footer-section-link">Garantías</Link></li>
              <li><Link to="/terminos" className="footer-section-link">Términos</Link></li>
              <li><Link to="/privacidad" className="footer-section-link">Privacidad</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 MotorPoint. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}