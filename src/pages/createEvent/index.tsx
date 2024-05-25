import { CreateEventForm } from '@components/createEventForm';
import { PageLayout } from '@components/pageLayout';
import { PageTitle } from '@components/pageTitle';
import { Flex } from 'antd';

export const CreateEventPage: React.FC = () => {
	return (
		<PageLayout>
			<PageTitle title="Создать мероприятие" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<CreateEventForm />
				</Flex>
			</Flex>
		</PageLayout>
	);
};
