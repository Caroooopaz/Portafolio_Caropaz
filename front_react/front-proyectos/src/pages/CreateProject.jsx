import { useState, useEffect } from "react";
import { createProject, updateProject, getProjectById } from "../services/api";
import { useNavigate, useParams, Link } from "react-router-dom"; 
import './Admin.css';
import './Auth.css'; // Borrowing form-group styles

function CreateProject() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        url: ''
    });

    useEffect(() => {
        if (id) {
            const loadData = async () => {
                const data = await getProjectById(id);
                if (data) setFormData({ nombre: data.nombre, descripcion: data.descripcion, url: data.url });
            };
            loadData();
        }
    }, [id]);

    const handleChange = (e) => {
      const {name, value} = e.target
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (id) {
            await updateProject(id, formData);
        } else {
            await createProject(formData);
        }
        navigate('/admin'); 
      } catch (error) {
        console.error(error);
        alert("Error al guardar el proyecto.");
      }
    };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="form-card glass-card">
            <header className="auth-header">
                <h1 className="auth-title">{id ? 'Actualizar' : 'Nuevo'} Proyecto</h1>
                <p className="auth-subtitle">Documenta tu proceso creativo y técnico.</p>
            </header>
            
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Título del Proyecto</label>
                    <input 
                        type="text" name="nombre" placeholder="Nombre impactante..."
                        value={formData.nombre} onChange={handleChange} required
                    />
                </div>
                
                <div className="form-group">
                    <label>Descripción Técnica</label>
                    <textarea
                        name="descripcion" placeholder="Explica el reto y la solución..."
                        value={formData.descripcion} onChange={handleChange} 
                        rows="5" style={{padding: '1rem', borderRadius: '12px', border: '1px solid var(--primary-light)', fontFamily: 'inherit'}}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>URL / Repositorio</label>
                    <input 
                        type="url" name="url" placeholder="https://mi-proyecto.com"
                        value={formData.url} onChange={handleChange} required
                    />
                </div>
                
                <div className="form-actions-row">
                    <Link to="/admin" className="btn-cancel">Cancelar</Link>
                    <button type="submit" className="petrol-btn">
                        {id ? 'Guardar Cambios' : 'Publicar Proyecto'}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;