import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { PageTitle } from '@components/pageTitle';
import { EditDisscussionForm } from '@components/editDisscussionForm';
import { useDeleteDisscussion } from '@hooks/useDeleteDisscussion';
import { useParams } from 'react-router-dom';

export const EditDisscussion: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { id } = useParams();
	const deleteDisscussion = useDeleteDisscussion();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Обсуждение успешно изменено',
		});
	};

	return (
		<PageLayout>
			{contextHolder}
			<PageTitle title="Редактирование обсуждения" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<EditDisscussionForm onSuccess={success} />
					<Button onClick={() => deleteDisscussion.mutate(id ? id : '')} danger>
						Удалить обсуждение
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
