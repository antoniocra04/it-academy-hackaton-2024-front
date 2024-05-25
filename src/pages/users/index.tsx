import { Space, TableProps, Tag, Table } from 'antd';
import { User } from '../../helpers/User';
import { PageLayout } from '@components/pageLayout';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@api/services/user';
import { useEffect } from 'react';

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

export const UsersPage: React.FC = () => {
	const users = useQuery({ queryKey: ['users'], queryFn: getAllUsers });
	useEffect(() => {
		console.log(users);
	}, [users.isSuccess]);
	return (
		<PageLayout>
			<Table columns={columns} dataSource={users.data?.data.$values} />
		</PageLayout>
	);
};
