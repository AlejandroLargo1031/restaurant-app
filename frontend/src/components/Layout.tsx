import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 p-6 bg-gray-50">
      <Outlet />
    </main>
    <footer className="bg-blue-700 text-white text-center py-2">
      © {new Date().getFullYear()} Oceans App
    </footer>
  </div>
);

export default Layout;
