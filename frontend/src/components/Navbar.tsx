import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from './Button';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();         
    navigate('/login'); 
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Restaurante</h1>
          {user?.role && <p className="text-sm">Rol: {user.role === 'admin' ? 'Administrador' : 'Empleado'}</p>}
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li><Link to="/Products" className="hover:underline">Productos</Link></li>
            <li><Link to="/Order" className="hover:underline">Órdenes</Link></li>
            <li><Link to="/Dashboard" className="hover:underline">Dashboard</Link></li>
          </ul>
          {user?.role && (
            <Button onClickbtn={handleLogout} text='Cerrar sesión' classButton='bg-red-500 hover:bg-red-600 text-white' />
          )}
        </div>
      </div>
    </nav>
  );
}
