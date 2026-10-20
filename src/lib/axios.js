import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:5001/api",
    baseURL: "https://chatapp-backend-mfb2.onrender.com/api",
    withCredentials: true,
})