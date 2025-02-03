import axios from "axios";

const axiosService = axios.create({
    baseURL: 'http://127.0.0.1:3307', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// axios request interceptor
axiosService.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// axios response interceptor
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