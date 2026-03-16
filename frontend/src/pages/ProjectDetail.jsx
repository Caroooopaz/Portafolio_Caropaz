import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/api';
import './ProjectDetail.css';

function ProjectDetail() {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await getProjectById(id);
                setProyecto(data);
            } catch (err) {
                console.error("Error cargando proyecto:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) return (
        <div className="status-container loading">
            <div className="spinner"></div>
            <p>Sintonizando detalles...</p>
        </div>
    );
    
    if (!proyecto) return (
        <div className="status-container error">
            <p>El proyecto no se encuentra en esta frecuencia.</p>
            <Link to="/proyectos" className="petrol-btn mt-4">Volver a Proyectos</Link>
        </div>
    );

    return (
        <div className="project-detail-page">
            <div className="container narrow-container">
                <Link to="/proyectos" className="back-link">
                    <span>←</span> Regresar a la lista
                </Link>

                <main className="detail-card glass-card">
                    <header className="detail-header">
                        <div className="detail-meta">
                            <span className="user-owner">Desarrollado por @{proyecto.user}</span>
                        </div>
                        <h1 className="detail-title">{proyecto.nombre}</h1>
                    </header>
                    
                    <div className="detail-body">
                        <section className="detail-section">
                            <h3>Sobre el Proyecto</h3>
                            <p className="detail-description">{proyecto.descripcion}</p>
                        </section>

                        <footer className="detail-footer">
                            <div className="link-info">
                                <span>URL del Proyecto:</span>
                                <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
                                    {proyecto.url}
                                </a>
                            </div>
                            
                            <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="petrol-btn large-btn">
                                Visitar Sitio Web <span>↗</span>
                            </a>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProjectDetail;
