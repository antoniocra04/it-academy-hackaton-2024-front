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
import { EventPage } from './pages/event';
import { CreateDisscussionPage } from './pages/createDisscussion';
import { DisscussionPage } from './pages/disscussion';
import { EditClubPage } from './pages/editGroup';
import { EditEventPage } from './pages/editEvent';
import { EditDisscussion } from './pages/editDisscussion';

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
		path: '/event/:id',
		element: <EventPage />,
	},
	{
		path: '/disscussion/:id',
		element: <DisscussionPage />,
	},
	{
		path: '/editClub/:groupId',
		element: (
			<PrivateRoute>
				<EditClubPage />
			</PrivateRoute>
		),
	},
	{
		path: '/editEvent/:id',
		element: (
			<PrivateRoute>
				<EditEventPage />
			</PrivateRoute>
		),
	},
	{
		path: '/editDisscussion/:id',
		element: (
			<PrivateRoute>
				<EditDisscussion />
			</PrivateRoute>
		),
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
		path: '/createDisscussion/:groupId',
		element: (
			<PrivateRoute>
				<CreateDisscussionPage />
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
