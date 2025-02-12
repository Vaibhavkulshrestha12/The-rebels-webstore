import { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

interface User {
  id: number;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  signIn: async () => {},
  signOut: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      }, { withCredentials: true });

      const userData = response.data;
      setUser(userData);
      setIsAdmin(userData.role === 'admin');
      toast.success('Successfully signed in');
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to sign in');
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await axios.post('http://localhost:5000/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      setIsAdmin(false);
      toast.success('Successfully signed out');
      navigate('/');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to sign out');
    }
  };

  const contextValue: AuthContextType = {
    user,
    isAdmin,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}