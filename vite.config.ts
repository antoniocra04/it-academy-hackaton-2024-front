import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@constants': path.resolve(__dirname, './src/constants'),
			'@components': path.resolve(__dirname, './src/components'),
			'@store': path.resolve(__dirname, './src/store'),
			'@ui': path.resolve(__dirname, './src/ui'),
			'@api': path.resolve(__dirname, './src/api'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@icons': path.resolve(__dirname, './src/icons'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	preview: {
		port: 8081,
		strictPort: true,
	   },
	server: {
		port: 8081,
		strictPort: true,
		host: true,
		origin: "http://0.0.0.0:8081",
	},
});
