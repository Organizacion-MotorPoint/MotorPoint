import { LayoutDashboard, Boxes, Users, LogOut, Gauge } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./admin.css";

export default function SidebarAdmin() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        <span className="motor">Motor</span>
        <span className="point">Point</span>
        <span className="admin">Admin</span>
      </h2>

      <nav className="sidebar-nav">
        <Link to="/admin" className={pathname === "/admin" ? "active" : ""}>
          <Gauge size={18} /> <span>Dashboard</span>
        </Link>
        <Link to="/admin/productos" className={pathname.includes("productos") ? "active" : ""}>
          <Boxes size={18} /> <span>Productos</span>
        </Link>
        <Link to="/admin/categorias" className={pathname.includes("categorias") ? "active" : ""}>
          <LayoutDashboard size={18} /> <span>Categorías</span>
        </Link>
        <Link to="/admin/usuarios" className={pathname.includes("usuarios") ? "active" : ""}>
          <Users size={18} /> <span>Usuarios</span>
        </Link>
      </nav>

      <div className="sidebar-footer">
        <Link to="/login" className="logout-link">
          <LogOut size={18} /> <span>Cerrar sesión</span>
        </Link>
      </div>
    </aside>
  );
}
