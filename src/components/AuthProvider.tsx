"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
}

interface LoginResponse {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (data: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const validateUser = (data: any): data is User => {
    return (
      data &&
      typeof data === 'object' &&
      typeof data.id === 'number' &&
      typeof data.username === 'string' &&
      typeof data.email === 'string' &&
      typeof data.isAdmin === 'boolean' &&
      data.username.length > 0 &&
      data.email.includes('@')
    );
  };

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        
        if (storedUser && storedToken) {
          const parsedUser = JSON.parse(storedUser);
          if (validateUser(parsedUser)) {
            setUser(parsedUser);
            setToken(storedToken);
          } else {
            console.error('Dados do usuário inválidos');
            localStorage.removeItem("user");
            localStorage.removeItem("token");
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredData();
  }, []);

  const login = async (data: LoginResponse): Promise<void> => {
    try {
      if (!data || typeof data !== 'object') {
        throw new Error('Dados de login inválidos');
      }

      const userData: User = {
        id: data.id,
        username: data.username,
        email: data.email,
        isAdmin: data.isAdmin
      };

      if (!validateUser(userData)) {
        throw new Error('Dados do usuário incompletos ou inválidos');
      }

      if (!data.token || typeof data.token !== 'string') {
        throw new Error('Token inválido');
      }

      setUser(userData);
      setToken(data.token);
      
      try {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", data.token);
      } catch (storageError) {
        console.error("Erro ao salvar no localStorage:", storageError);
        // Reverte as alterações de estado em caso de erro no localStorage
        setUser(null);
        setToken(null);
        throw new Error('Erro ao salvar dados de autenticação');
      }
    } catch (error) {
      console.error("Erro ao salvar dados do usuário:", error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      setToken(null);
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      // Força a limpeza mesmo em caso de erro
      setUser(null);
      setToken(null);
      throw new Error('Erro ao fazer logout');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
} 
