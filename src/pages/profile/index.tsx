import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { ProfileForm } from '@components/profileForm';
import { PageTitle } from '@components/pageTitle';

export const ProfilePage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();

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
					<Button danger>Удалить аккаунт</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
