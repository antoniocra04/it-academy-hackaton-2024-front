import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { RegistrationPage } from './pages/registration';
import { GroupsPage } from './pages/groups';
import { GroupPage } from './pages/group';
import { ProfilePage } from './pages/profile';
import { UsersPage } from './pages/users';
import { PrivateRoute } from '@components/privateRoute';
import { CreateGroupPage } from './pages/createGroup';
import { CreateEventPage } from './pages/createEvent';

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
		path: '/group/:id',
		element: <GroupPage />,
	},
	{
		path: '/users',
		element: (
			<PrivateRoute>
				<UsersPage />
			</PrivateRoute>
		),
	},
	{
		path: '/createEvent/:groupId',
		element: (
			<PrivateRoute>
				<CreateEventPage />
			</PrivateRoute>
		),
	},
	{
		path: '/profile',
		element: (
			<PrivateRoute>
				<ProfilePage />
			</PrivateRoute>
		),
	},
	{
		path: '/createClub',
		element: (
			<PrivateRoute>
				<CreateGroupPage />
			</PrivateRoute>
		),
	},
]);

export const App: React.FC = () => {
	return <RouterProvider router={router} />;
};
