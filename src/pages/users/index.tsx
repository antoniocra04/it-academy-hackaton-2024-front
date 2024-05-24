import { Space, TableProps, Tag, Table } from 'antd';
import { User } from '../../helpers/User';
import { PageLayout } from '@components/pageLayout';

const columns: TableProps<User>['columns'] = [
	{
		title: 'Логин',
		dataIndex: 'login',
		key: 'login',
	},
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Фамилия',
		dataIndex: 'surname',
		key: 'surname',
	},
	{
		title: 'Отчество',
		dataIndex: 'fatherland',
		key: 'fatherland',
	},
	{
		title: 'Роль',
		key: 'role',
		dataIndex: 'role',
		render: (_, { role }) => (
			<>
				<Tag color={role ? 'geekblue' : 'green'} key={role}>
					{role ? 'Админ' : 'Пользователь'}
				</Tag>
			</>
		),
	},
	{
		title: 'Действие',
		key: 'action',
		render: (_) => (
			<Space size="middle">
				<a>Delete</a>
			</Space>
		),
	},
];

const data: User[] = [
	{
		login: 'adsf',
		name: 'asdf',
		surname: 'asdfsad',
		fatherland: 'asdfsa',
		role: 1,
		id: 'asdf',
		password: 'asdf',
	},
];

export const UsersPage: React.FC = () => {
	return (
		<PageLayout>
			<Table columns={columns} dataSource={data} />
		</PageLayout>
	);
};
