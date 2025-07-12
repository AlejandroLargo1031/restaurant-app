import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useRegisterForm } from '../hooks/useRegisterForm';

const RegisterPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    role,
    setRole,
    error,
    success,
    handleSubmit
  } = useRegisterForm();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Registro de usuario</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <select
          value={role}
          onChange={e => setRole(e.target.value as 'employee' | 'admin')}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="employee">Empleado</option>
          <option value="admin">Admin</option>
        </select>
        <Button text='Registrar' classButton='bg-blue-600 text-white hover:bg-green-700 mb-3' />

        <Link to='/Login'className='text-blue-600 hover:underline decoration-blue-600'>Login</Link>
      </form>
    </div>
  );
};

export default RegisterPage; 