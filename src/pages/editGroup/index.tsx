import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { PageTitle } from '@components/pageTitle';
import { EditClubForm } from '@components/editClubForm';
import { useParams } from 'react-router-dom';
import { useDeleteClub } from '@hooks/useDeleteClub';

export const EditClubPage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { groupId } = useParams();
	const deleteClub = useDeleteClub();

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Группа успешно изменен',
		});
	};

	return (
		<PageLayout>
			{contextHolder}
			<PageTitle title="Редактирование группы" />
			<Flex vertical justify="center" align="center">
				<Flex vertical style={{ width: 500 }}>
					<EditClubForm onSuccess={success} />
					<Button onClick={() => deleteClub.mutate(groupId ? groupId : '')} danger>
						Удалить группу
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
