import { PageTitle } from '@components/pageTitle';
import { RegistrationForm } from '@components/registrationForm';
import { Flex } from 'antd';

export const RegistrationPage: React.FC = () => {
	return (
		<Flex justify="center" style={{ marginTop: '20vh' }}>
			<Flex vertical style={{ width: '500px' }} align="center">
				<PageTitle title="Регистрация" />
				<RegistrationForm />
			</Flex>
		</Flex>
	);
};
