import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { PageTitle } from '@components/pageTitle';
import { useDeleteUser } from '@hooks/useDeleteUser';
import { EditEventForm } from '@components/editEventForm';

export const EditEventPage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const deleteUser = useDeleteUser();

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
					<Button onClick={() => deleteUser.mutate()} danger>
						Удалить группу
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
