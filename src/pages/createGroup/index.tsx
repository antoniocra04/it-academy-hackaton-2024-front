import { CreateClubForm } from '@components/createClubForm';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { Flex } from 'antd';

export const CreateGroupPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle title="Создать клуб" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<CreateClubForm />
				</Flex>
			</Flex>
		</PageLayout>
	);
};
