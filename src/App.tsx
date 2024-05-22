import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { RegistrationPage } from './pages/registration';
import { GroupsPage } from './pages/groups';

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/registration',
		element: <RegistrationPage />,
	},
	{
		path: '/groups',
		element: <GroupsPage />,
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
