import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useCreateDisscussion } from '@hooks/useCreateDisscussion';
import { useParams } from 'react-router-dom';

export const CreateDisscussionForm: React.FC = () => {
	const createDisscussion = useCreateDisscussion();
	const { groupId } = useParams();
	const [fields, setFields] = useState<IFieldData[]>([]);

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
				name="name"
				rules={[
					{
						required: true,
						message: 'Введите название обсуждения',
					},
				]}
			>
				<Input placeholder="Название обсуждения" />
			</Form.Item>
			<Form.Item
				name="description"
				rules={[
					{
						required: true,
						message: 'Введите описание',
					},
				]}
			>
				<Input placeholder="Описание" />
			</Form.Item>
			<Form.Item
				name="fulldescription"
				rules={[
					{
						required: true,
						message: 'Введите полное описание',
					},
				]}
			>
				<TextArea style={{ resize: 'none', height: 150 }} placeholder="Полное описание" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}
					onClick={() =>
						createDisscussion.mutate({
							title: fields[0].value,
							description: fields[1].value,
							fullDescription: fields[2].value,
							clubId: groupId ? groupId : '',
						})
					}
				>
					Создать
				</Button>
			</Form.Item>
		</Form>
	);
};
