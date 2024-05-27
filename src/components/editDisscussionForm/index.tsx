import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEditDisscussion } from '@hooks/useEditDisscussion';
import { getDisscussionById } from '@api/services/disscussions';

interface EditDisscussionFormProps {
	onSuccess: () => void;
}

export const EditDisscussionForm: React.FC<EditDisscussionFormProps> = ({ onSuccess }) => {
	const EditDisscussion = useEditDisscussion(onSuccess);
	const { id } = useParams();
	const disscussion = useQuery({ queryKey: ['disscussion'], queryFn: () => getDisscussionById(id ? id : '') });
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
				initialValue={disscussion.data?.data.title}
			>
				<Input placeholder="Название клуба" />
			</Form.Item>
			<Form.Item
				name="description"
				rules={[
					{
						required: true,
						message: 'Введите описание',
					},
				]}
				initialValue={disscussion.data?.data.description}
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
				initialValue={disscussion.data?.data.fullDescription}
			>
				<TextArea style={{ resize: 'none', height: 150 }} placeholder="Полное описание" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}
					onClick={() =>
						EditDisscussion.mutate({
							title: fields[0].value,
							description: fields[1].value,
							fullDescription: fields[2].value,
							id: id ? id : '',
						})
					}
				>
					Изменить
				</Button>
			</Form.Item>
		</Form>
	);
};
