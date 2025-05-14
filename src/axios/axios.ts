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

export { axiosService }