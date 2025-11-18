import "../styles/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Encuentra los mejores <span>repuestos</span> para tu vehículo
        </h1>

        <p className="hero-subtitle">
          Productos originales y compatibles para autos y motos. Calidad garantizada,
          envío rápido y los mejores precios del mercado.
        </p>

        <div className="hero-search">
          <input type="text" placeholder="Buscar por marca o modelo..." />
          <button>Buscar</button>
        </div>

        <div className="hero-buttons">
          <Link to="/catalogo" className="btn-red">Ver Catálogo</Link>
          <Link to="/contacto" className="btn-outline">Contactar Asesor</Link>
        </div>
      </div>
    </header>
  );
}

export default Hero;
