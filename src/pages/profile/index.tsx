import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { ProfileForm } from '@components/profileForm';
import { PageTitle } from '@components/pageTitle';
import { useDeleteUser } from '@hooks/useDeleteUser';

export const ProfilePage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const deleteUser = useDeleteUser();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Пользователь успешно изменен',
		});
	};

	return (
		<PageLayout>
			{contextHolder}
			<PageTitle title="Профиль" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<ProfileForm onSuccess={success} />
					<Button onClick={() => deleteUser.mutate()} danger>
						Удалить аккаунт
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
