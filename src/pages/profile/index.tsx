import { PageLayout } from '@components/pageLayout';
import { Button, Flex, Form, Input } from 'antd';
import { useState } from 'react';
import { IFieldData } from '../../helpers/FieldData';
import { useTypedSelector } from '@store/hooks/baseHooks';

export const ProfilePage: React.FC = () => {
	const [fields, setFields] = useState<IFieldData[]>([]);
	const user = useTypedSelector((state) => state.user);

	return (
		<PageLayout>
			<Flex vertical style={{ width: 500 }}>
				<Form
					name="normal_login"
					initialValues={{
						remember: true,
					}}
					fields={fields}
					onFieldsChange={(_, allFields) => {
						setFields(allFields);
					}}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: 'Введите логин',
							},
						]}
						initialValue={user.login}
					>
						<Input placeholder="Логин" />
					</Form.Item>
					<Form.Item
						name="name"
						rules={[
							{
								required: true,
								message: 'Введите имя',
							},
						]}
						initialValue={user.name}
					>
						<Input placeholder="Имя" />
					</Form.Item>
					<Form.Item
						name="surname"
						rules={[
							{
								required: true,
								message: 'Введите фамилию',
							},
						]}
						initialValue={user.surname}
					>
						<Input placeholder="Фамилия" />
					</Form.Item>
					<Form.Item
						name="fatherland"
						rules={[
							{
								required: true,
								message: 'Введите отчество',
							},
						]}
						initialValue={user.fatherland}
					>
						<Input placeholder="Отчество" />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Сохранить
						</Button>
					</Form.Item>
				</Form>
			</Flex>
		</PageLayout>
	);
};
