import axios from 'axios';

export const BACKEND_URL = 'http://localhost:5035';

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
	headers: { 'Access-Control-Allow-Origin': '*' },
});
