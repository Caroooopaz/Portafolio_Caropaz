import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProjectList from './pages/ProjectList';
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';
import ProjectDetail from './pages/ProjectDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectList />} />
          <Route path="/usuario/:username" element={<ProjectList />} />
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/crear" element={<CreateProject />} />
          <Route path="/admin/editar/:id" element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
