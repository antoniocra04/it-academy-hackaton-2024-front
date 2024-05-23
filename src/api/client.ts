import axios from 'axios';

export const BACKEND_URL = 'https://localhost:7144';

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
});
