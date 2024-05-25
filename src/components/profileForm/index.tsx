import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { IFieldData } from '../../helpers/FieldData';
import { useTypedSelector } from '@store/hooks/baseHooks';
import { useUpdateUser } from '@hooks/useUpdateUser';

interface ProfileFormProps {
	onSuccess: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSuccess }) => {
	const [fields, setFields] = useState<IFieldData[]>([]);
	const user = useTypedSelector((state) => state.user);
	const updateUser = useUpdateUser(onSuccess);
	return (
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
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}
					onClick={() =>
						updateUser.mutate({
							login: fields[0].value,
							name: fields[1].value,
							surname: fields[2].value,
							fatherland: fields[3].value,
							id: user.id,
							password: user.password,
							role: user.role,
						})
					}
				>
					Сохранить
				</Button>
			</Form.Item>
		</Form>
	);
};
