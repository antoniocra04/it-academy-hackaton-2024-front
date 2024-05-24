import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { RegistrationPage } from './pages/registration';
import { GroupsPage } from './pages/groups';
import { GroupPage } from './pages/group';
import { ProfilePage } from './pages/profile';
import { UsersPage } from './pages/users';

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
		path: '/',
		element: <GroupsPage />,
	},
	{
		path: '/group',
		element: <GroupPage />,
	},
	{
		path: '/profile',
		element: <ProfilePage />,
	},
	{
		path: '/users',
		element: <UsersPage />,
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
