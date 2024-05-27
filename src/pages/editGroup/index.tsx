import { PageLayout } from '@components/pageLayout';
import { Button, Flex, message } from 'antd';
import { PageTitle } from '@components/pageTitle';
import { useDeleteUser } from '@hooks/useDeleteUser';
import { EditClubForm } from '@components/editClubForm';

export const EditClubPage: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const deleteUser = useDeleteUser();

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
					<Button onClick={() => deleteUser.mutate()} danger>
						Удалить группу
					</Button>
				</Flex>
			</Flex>
		</PageLayout>
	);
};
