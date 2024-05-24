import axios from 'axios';

export const BACKEND_URL = 'https://backend:8080';

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
});
