import axios from 'axios';
import { store } from '../store/index';

export const HOST = 'http://localhost:5035';
export const BACKEND_URL = `${HOST}/api`;

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
	headers: { 'Access-Control-Allow-Origin': '*' },
});

axiosClient.interceptors.request.use(function (config) {
	config.headers.Authorization = `Bearer ${store.getState().user.token}`;
	return config;
});
