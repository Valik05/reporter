import axios from "axios";
import { LOCAL_STORAGE } from "../enums/localStorage";

const baseURL = import.meta.env.VITE_APP_BASE_API_URL;

const axiosService = axios.create({
    baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)}`
    return config
})

axiosService.interceptors.response.use((config) => config, async (error) => {
    const request = error.config;
    if (error.response?.status === 500 && !error.config._isRetry) {
        request._isRetry = true;
        try {
            return axiosService.request(request)
        } catch (e) {
            console.error(e);
        }
    }
})

export { axiosService }