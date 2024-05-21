import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
