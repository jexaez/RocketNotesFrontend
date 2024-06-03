import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-j10w.onrender.com"
});