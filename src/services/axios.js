import axios from "axios";
const axiosService = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
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