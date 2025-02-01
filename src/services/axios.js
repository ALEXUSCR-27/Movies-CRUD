import axios from "axios";

const axiosService = axios.create({
    baseURL: 'http://127.0.0.1:3307', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utilizado si se necesita realizar algo antes de enviar la solicitud al servidor
axiosService.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// Utilizado para trabajar los datos después de recibir la respuesta del servidor
axiosService.interceptors.response.use (
    (response) => {
        return response;
    },
    (error) => {
        alert("ERROR => "+error)
        return Promise.reject(error);
    }
)
export default axiosService;