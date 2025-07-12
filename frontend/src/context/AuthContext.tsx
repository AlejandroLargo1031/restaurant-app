import { createContext } from 'react';
import type { User } from '../types/User';

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, password:string, role: 'admin' | 'employee') => Promise<{ok: boolean; error?: string}> 
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);