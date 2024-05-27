import { CreateDisscussionForm } from '@components/createDisscussionForm/indext';
import { CreateEventForm } from '@components/createEventForm';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { Flex } from 'antd';

export const CreateDisscussionPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle title="Создать обсуждение" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<CreateDisscussionForm />
				</Flex>
			</Flex>
		</PageLayout>
	);
};
