import { Outlet, useLocation } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';
import NavbarAdmin from './NavbarAdmin';
import './admin.css';

export default function AdminLayout() {
  const location = useLocation();
  const titulo = location.pathname.split('/')[2]?.toUpperCase() || 'ADMIN';

  return (
    <div className="admin-container">
      <SidebarAdmin />
      <main className="admin-main">
        <NavbarAdmin titulo={titulo} />
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
