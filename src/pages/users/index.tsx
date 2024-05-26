import { Space, TableProps, Tag, Table } from 'antd';
import { User } from '../../helpers/User';
import { PageLayout } from '@components/pageLayout';
import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '@api/services/user';
import { useDeleteUserByAdmin } from '@hooks/useDeleteUserByAdmin';
import { useMakeAdmin } from '@hooks/useMakeAdmin';

export const UsersPage: React.FC = () => {
	const users = useQuery({ queryKey: ['users'], queryFn: getAllUsers });
	const deleteUser = useDeleteUserByAdmin(users.refetch);
	const makeAdmin = useMakeAdmin(users.refetch);
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
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => deleteUser.mutate(record.login)}>Delete</a>
					<a onClick={() => makeAdmin.mutate(record.login)}>Make admin</a>
				</Space>
			),
		},
	];

	return (
		<PageLayout>
			<Table columns={columns} dataSource={users.data?.data} />
		</PageLayout>
	);
};
