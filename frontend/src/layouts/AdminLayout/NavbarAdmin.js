import './admin.css';

export default function NavbarAdmin({ titulo }) {
  const { tituloModulo, subtituloModulo } = getEncabezado(titulo);

  return (
    <header className="navbar-admin">
      <div className="navbar-texto">
        <h2 className="navbar-titulo">{tituloModulo}</h2>
        <p className="navbar-subtitulo">{subtituloModulo}</p>
      </div>
    </header>
  );
}

function getEncabezado(titulo) {
  switch (titulo.toLowerCase()) {
    case "dashboard":
      return {
        tituloModulo: "Dashboard",
        subtituloModulo: "Resumen general de MotorPoint"
      };
    case "productos":
      return {
        tituloModulo: "Productos",
        subtituloModulo: "Gestión de productos disponibles"
      };
    case "categorias":
      return {
        tituloModulo: "Categorías",
        subtituloModulo: "Gestión de categorías del catálogo"
      };
    case "usuarios":
      return {
        tituloModulo: "Usuarios",
        subtituloModulo: "Gestión de cuentas y accesos"
      };
    default:
      return {
        tituloModulo: "Dashboard",
        subtituloModulo: "Resumen general de MotorPoint"
      };
  }
}
