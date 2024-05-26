import { LoginForm } from '@components/loginForm';
import { PageTitle } from '@components/pageTitle';
import { Flex, message } from 'antd';

export const LoginPage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();

	const error = () => {
		messageApi.open({
			type: 'error',
			content: 'Неверные данные',
		});
	};
	return (
		<Flex justify="center" style={{ marginTop: '20vh' }}>
			{contextHolder}
			<Flex vertical style={{ width: '500px' }} align="center">
				<PageTitle title="Авторизация" />
				<LoginForm onError={error} />
			</Flex>
		</Flex>
	);
};
