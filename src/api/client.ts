import axios from 'axios';
import { store } from '../store/index';

export const HOST = 'http://147.45.158.95:8080';
export const BACKEND_URL = `${HOST}/api`;

export const axiosClient = axios.create({
	baseURL: BACKEND_URL,
	headers: { 'Access-Control-Allow-Origin': '*' },
});

axiosClient.interceptors.request.use(function (config) {
	config.headers.Authorization = `Bearer ${store.getState().user.token}`;
	return config;
});
