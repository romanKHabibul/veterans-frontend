import axios from "axios";

export const API_URL = "https://veterans-backend.onrender.com/api"

export const axiosConfig = axios.create({
    baseURL: API_URL,
    headers: ({"Content-Type": "application/json"})
})