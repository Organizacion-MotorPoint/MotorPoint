import "../styles/Categories.css";
import { Link } from "react-router-dom";
import autosImg from "../images/RepuestosCarros.png";
import motosImg from "../images/RepuestosMotos.png";
import accAutosImg from "../images/AccesoriosCarros.png";
import accMotosImg from "../images/AccesoriosMotos.png";

function Categories() {
  const categories = [
    {
      name: "Repuestos para Autos",
      desc: "Frenos, suspensión, motor y más",
      img: autosImg,
      link: "/autos",
    },
    {
      name: "Repuestos para Motos",
      desc: "Cadenas, llantas, filtros y más",
      img: motosImg,
      link: "/motos",
    },
    {
      name: "Accesorios Autos",
      desc: "Luces, audio, tuning y más",
      img: accAutosImg,
      link: "/autos",
    },
    {
      name: "Accesorios Motos",
      desc: "Cascos, guantes, protección",
      img: accMotosImg,
      link: "/motos",
    },
  ];

  return (
    <section className="categories-section">
      <h2 className="categories-title">Explora Nuestras Categorías</h2>
      <p className="categories-sub">
        Encuentra exactamente lo que necesitas para tu vehículo
      </p>

      <div className="categories-grid">
        {categories.map((cat, i) => (
          <Link to={cat.link} className="category-card" key={i}>
            <img src={cat.img} alt={cat.name} />
            <div className="category-info">
              <h4>{cat.name}</h4>
              <p>{cat.desc}</p>
              <span className="cat-link">
                Ver productos →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
