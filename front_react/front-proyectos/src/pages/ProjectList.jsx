import { useEffect, useState, useRef } from 'react';
import { getProjects } from '../services/api';
import { Link, useParams } from 'react-router-dom';
import './ProjectList.css';

function ProjectList() {
  const [proyectos, setProjects] = useState([]);
  const lastProjectsRef = useRef([]);
  const { username } = useParams();

  useEffect(() => {
    let canceled = false;
    const fetchData = async () => {
      try {
        const response = await getProjects(username); 
        const data = Array.isArray(response) ? response : [];

        const prev = lastProjectsRef.current;
        const isSame = prev.length === data.length && prev.every((p, i) => p.id === data[i]?.id);

        if (!canceled && !isSame) {
          setProjects(data);
          lastProjectsRef.current = data;
        }
      } catch (err) {
        console.error(err);
        if (!canceled) setProjects([]);
      }
    };
    fetchData();
    return () => { canceled = true; };
  }, [username]);

  return (
    <div className="project-list-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">
            {username ? `Portafolio de ${username}` : 'Proyectos Seleccionados'}
          </h1>
          <p className="page-subtitle">Una muestra de soluciones técnicas construidas con propósito y calidad.</p>
        </header>

        <div className="projects-grid">
          {Array.isArray(proyectos) && proyectos.length > 0 ? (
            proyectos.map((proyecto, index) => (
              <div key={proyecto.id ?? index} className="project-card glass-card">
                <div className="card-badge">Fullstack</div>
                <h2 className="card-title">{proyecto.nombre}</h2>
                <p className="card-desc">
                  {proyecto.descripcion || "Sin descripción disponible para este proyecto."}
                </p>
                
                <div className="card-footer">
                  <Link to={`/proyecto/${proyecto.id}`} className="view-more">
                    Ver Detalles <span>→</span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>No se encontraron proyectos activos en este momento.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;