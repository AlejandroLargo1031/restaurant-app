import '../index.css';
import { Link} from 'react-router-dom';
import Button from '../components/Button';
import { useLoginForm } from '../hooks/useLoginForm';

const LoginPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleSubmit,
  } = useLoginForm();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
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
          className="w-full mb-4 p-2 border rounded"
        />
        <Button text='Entrar' classButton='bg-blue-600 hover:bg-blue-700 text-white mb-3' />
         <Link to='/' className='text-blue-600 hover:underline decoration-blue-600 w-full'>Registrar</Link>
      </form>
    </div>
  );
};

export default LoginPage; 