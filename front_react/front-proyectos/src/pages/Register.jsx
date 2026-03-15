import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/api';
import './Auth.css';

function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await registerUser(formData);
            alert("Cuenta creada con éxito. Ahora inicia sesión.");
            navigate('/login');
        } catch (err) {
            console.error(err);
            const serverError = err.response?.data;
            if (serverError && typeof serverError === 'object') {
                setError(Object.entries(serverError).map(([key, val]) => `${key}: ${val}`).join('. '));
            } else {
                setError('Error al registrar usuario. Intenta con otro nombre de usuario.');
            }
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card glass-card">
                <header className="auth-header">
                    <h1 className="auth-title">Comenzar</h1>
                    <p className="auth-subtitle">Crea tu cuenta de desarrollador</p>
                </header>

                {error && <div className="error-msg">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label>Nombre de Usuario</label>
                        <input 
                            type="text" name="username" value={formData.username} 
                            onChange={handleChange} required placeholder="ej: caropaz"
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input 
                            type="email" name="email" value={formData.email} 
                            onChange={handleChange} required placeholder="tu@correo.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" name="password" value={formData.password} 
                            onChange={handleChange} required placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="petrol-btn">Crear mi Cuenta</button>
                </form>

                <footer className="auth-footer">
                    <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
                </footer>
            </div>
        </div>
    );
}

export default Register;
