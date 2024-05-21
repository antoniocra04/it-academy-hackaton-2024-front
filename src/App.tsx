import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <></>,
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
