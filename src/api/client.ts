import axios from 'axios';

export const BACKEND_URL = 'https://localhost:8080';

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
});
