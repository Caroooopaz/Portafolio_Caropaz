import { createContext, useState, useEffect } from 'react';
import { loginUser as loginApiService } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Al cargar la app, revisar si hay un token guardado.
        // En un caso real, validaríamos el token con el backend para sacar los datos del usuario.
        // Aquí simulamos que si hay token, el usuario está activo.
        const token = localStorage.getItem('access_token');
        const username = localStorage.getItem('username');
        if (token && username) {
            setUser({ username, token });
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const data = await loginApiService({ username, password });
            
            // Django SimpleJWT devuelve access y refresh
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            localStorage.setItem('username', username);
            
            setUser({ username, token: data.access });
            return true;
        } catch (error) {
            console.error("Error en login:", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('username');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
