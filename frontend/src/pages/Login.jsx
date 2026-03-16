import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Auth.css';

function Login() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const success = await login(formData.username, formData.password);
            if (success) {
                navigate('/admin');
            } else {
                setError('Credenciales inválidas. Intenta de nuevo.');
            }
        } catch (err) {
            const serverError = err.response?.data;
            if (serverError && typeof serverError === 'object') {
                setError(Object.values(serverError).flat().join(', '));
            } else {
                setError('Error al iniciar sesión. Intenta de nuevo.');
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card glass-card">
                <header className="auth-header">
                    <h1 className="auth-title">Bienvenido</h1>
                    <p className="auth-subtitle">Inicia sesión para gestionar tu portafolio</p>
                </header>

                {error && <div className="error-msg">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Usuario</label>
                        <input 
                            type="text" name="username" value={formData.username} 
                            onChange={handleChange} required placeholder="tu_usuario"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" name="password" value={formData.password} 
                            onChange={handleChange} required placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="petrol-btn">Entrar a mi Panel</button>
                </form>

                <footer className="auth-footer">
                    <p>¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
                </footer>
            </div>
        </div>
    );
}

export default Login;
