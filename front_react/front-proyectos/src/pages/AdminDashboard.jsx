import { useEffect, useState, useContext } from 'react';
import { getProjects, deleteProject } from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Admin.css';

function AdminDashboard() {
    const { user, logout } = useContext(AuthContext);
    const [proyectos, setProyectos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        fetchMyProjects();
    }, [user, navigate]);

    const fetchMyProjects = async () => {
        const data = await getProjects(user.username);
        setProyectos(Array.isArray(data) ? data : []);
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Deseas retirar este proyecto de tu portafolio?')) {
            await deleteProject(id);
            fetchMyProjects();
        }
    };

    if (!user) return null;

    return (
        <div className="admin-page">
            <div className="container">
                <header className="admin-header">
                    <h1 className="admin-title">Panel de Control</h1>
                    <div className="admin-actions">
                        <Link to="/admin/crear" className="petrol-btn">+ Nuevo Proyecto</Link>
                        <button onClick={logout} className="btn-logout">Cerrar Sesión</button>
                    </div>
                </header>

                <div className="dashboard-card glass-card">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Nombre del Proyecto</th>
                                <th>Enlace Externo</th>
                                <th style={{textAlign: 'right'}}>Gestión</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proyectos.map(p => (
                                <tr key={p.id}>
                                    <td><strong>{p.nombre}</strong></td>
                                    <td>
                                        <a href={p.url} target="_blank" rel="noreferrer">{p.url}</a>
                                    </td>
                                    <td className="action-links">
                                        <Link to={`/admin/editar/${p.id}`} className="edit-link">Editar</Link>
                                        <button onClick={() => handleDelete(p.id)} className="delete-btn">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                            {proyectos.length === 0 && (
                                <tr>
                                    <td colSpan="3" style={{textAlign: 'center', padding: '4rem', fontStyle: 'italic', color: 'var(--text-secondary)'}}>
                                        Aún no has añadido proyectos a tu bitácora.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
