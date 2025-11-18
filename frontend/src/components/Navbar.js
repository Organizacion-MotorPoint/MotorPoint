import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { Car, Menu, Search, ShoppingCart, User, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <Car />
            </div>
            <span className="navbar-logo-text">
              Motor<span className="highlight">Point</span>
            </span>
          </Link>

          <div className="navbar-nav">
            <Link to="/catalogo" className="navbar-link">Catálogo</Link>
            <Link to="/autos" className="navbar-link">Autos</Link>
            <Link to="/motos" className="navbar-link">Motos</Link>
            <Link to="/ofertas" className="navbar-link">Ofertas</Link>
          </div>

          <div className="navbar-actions">

            <button className="navbar-icon-button navbar-search-button">
              <Search />
            </button>

            <Link to="/login" className="navbar-icon-button">
              <User />
            </Link>

            <button className="navbar-icon-button" style={{ position: "relative" }}>
              <ShoppingCart />
              <span className="navbar-cart-badge">0</span>
            </button>

            <button className="navbar-icon-button navbar-menu-button" onClick={() => setOpen(true)}>
              <Menu />
            </button>

          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mp-mobile-menu ${open ? "open" : ""}`}>
        <button className="mp-mobile-close-btn" onClick={() => setOpen(false)}>
          <X />
        </button>

        <Link className="mp-mobile-link" to="/catalogo" onClick={() => setOpen(false)}>Catálogo</Link>
        <Link className="mp-mobile-link" to="/autos" onClick={() => setOpen(false)}>Autos</Link>
        <Link className="mp-mobile-link" to="/motos" onClick={() => setOpen(false)}>Motos</Link>
        <Link className="mp-mobile-link" to="/ofertas" onClick={() => setOpen(false)}>Ofertas</Link>
      </div>

      {open && <div className="mp-mobile-overlay" onClick={() => setOpen(false)}></div>}
    </>
  );
}
