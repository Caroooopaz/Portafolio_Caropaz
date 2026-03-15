import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './NavBar.css';

function NavBar() {
    const { user } = useContext(AuthContext);

    return (
    <nav className="navbar">
        <div className="container nav-content">
            <Link to="/" className="nav-logo">
                Tech<span>& Harmony</span>
            </Link>

            <div className="nav-links">
                <Link to="/" className="nav-item">Inicio</Link>
                <Link to="/proyectos" className="nav-item">Proyectos</Link>
                
                {user ? (
                    <>
                        <Link to="/admin" className="nav-item">Panel</Link>
                        <Link to="/admin/crear" className="nav-item nav-btn">Crear</Link>
                    </>
                ) : (
                    <Link to="/login" className="nav-item">Login</Link>
                )}
            </div>
        </div>
    </nav>
    )
}
export default NavBar;