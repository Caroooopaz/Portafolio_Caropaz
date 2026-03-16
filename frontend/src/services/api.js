import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor para agregar el token a todas las peticiones
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const loginUser = async (credentials) => {
    const response = await api.post("/auth/login/", credentials);
    return response.data;
};

export const registerUser = async (userData) => {
    const response = await api.post("/auth/registro/", userData);
    return response.data;
};

export const getProjects = async (username = null) => {
    const query = username ? `?username=${username}` : '';
    const response = await api.get(`/proyectos/${query}`); 
    return response.data;
};

export const getProjectById = async (id) => {
    const response = await api.get(`/proyectos/${id}/`);
    return response.data;
};

export const createProject = async (project) => {
    const response =  await api.post("/proyectos/", project);
    return response.data;
};

export const updateProject = async (id, project) => {
    const response = await api.put(`/proyectos/${id}/`, project);
    return response.data;
};

export const deleteProject = async (id) => {
    const response = await api.delete(`/proyectos/${id}/`);
    return response.data;
};

export default api;