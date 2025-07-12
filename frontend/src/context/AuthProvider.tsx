import { useState, type ReactNode } from 'react';
import type { User } from '../types/User';
import { AuthContext } from './AuthContext';

const initialUsers: User[] = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'empleado', password: 'empleado123', role: 'employee' },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(initialUsers);

  const login = async (username: string, password: string) => {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const register = async (username: string, password: string, role: 'admin' | 'employee') => {
    if (users.some(u => u.username === username)) {
      return { ok: false, error: 'El usuario ya existe' };
    }
    const newUser: User = { username, password, role };
    setUsers(prev => [...prev, newUser]);
    return { ok: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}; 