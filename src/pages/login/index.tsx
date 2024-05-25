import { LoginForm } from '@components/loginForm';
import { PageTitle } from '@components/pageTitle';
import { Flex } from 'antd';

export const LoginPage: React.FC = () => {
	return (
		<Flex justify="center" style={{ marginTop: '20vh' }}>
			<Flex vertical style={{ width: '500px' }} align="center">
				<PageTitle title="Авторизация" />
				<LoginForm />
			</Flex>
		</Flex>
	);
};
