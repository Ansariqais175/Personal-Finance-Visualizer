import axios from "axios";

const API_URL = "https://pfv-backend.onrender.com/api/transactions";

export const api = axios.create({
  baseURL: API_URL,
});

export const BASE_API = "https://pfv-backend.onrender.com";
