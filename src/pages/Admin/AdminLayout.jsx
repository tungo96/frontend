import Header from '../../components/admin/Header/Header';
import Footer from '../../components/admin/Footer/Footer';
import Sidebar from '../../components/admin/Sidebar/Sidebar';

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-main">
        <Sidebar />
        <div className="admin-content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
} 