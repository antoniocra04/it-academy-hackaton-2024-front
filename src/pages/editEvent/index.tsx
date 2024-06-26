import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { PageTitle } from '@components/pageTitle';
import { EditEventForm } from '@components/editEventForm';
import { useDeleteEvent } from '@hooks/useDeleteEvent';
import { useParams } from 'react-router-dom';

export const EditEventPage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { id } = useParams();
	const deleteEvent = useDeleteEvent();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Мероприятие успешно изменено',
		});
	};

	return (
		<PageLayout>
			{contextHolder}
			<PageTitle title="Редактирование мероприятия" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<EditEventForm onSuccess={success} />
					<Button onClick={() => deleteEvent.mutate(id ? id : '')} danger>
						Удалить мероприятие
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
