import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'employee' | 'admin'>('employee');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Simula el registro
    setSuccess('Usuario registrado correctamente (simulado)');
    setUsername('');
    setPassword('');
    setRole('employee');

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    role,
    setRole,
    error,
    success,
    handleSubmit,
  };
};
