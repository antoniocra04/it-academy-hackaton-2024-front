import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEditEvent } from '@hooks/useEditEvent';
import { getEvetntById } from '@api/services/event';

interface EditEventFormProps {
	onSuccess: () => void;
}

export const EditEventForm: React.FC<EditEventFormProps> = ({ onSuccess }) => {
	const editEvent = useEditEvent(onSuccess);
	const { id } = useParams();
	const event = useQuery({ queryKey: ['event'], queryFn: () => getEvetntById(id ? id : '') });
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
						message: 'Введите название мероприятия',
					},
				]}
				initialValue={event.data?.data.name}
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
				initialValue={event.data?.data.description}
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
				initialValue={event.data?.data.fullDescription}
			>
				<TextArea style={{ resize: 'none', height: 150 }} placeholder="Полное описание" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}
					onClick={() =>
						editEvent.mutate({
							title: fields[0].value,
							description: fields[1].value,
							fullDescription: fields[2].value,
							id: id ? id : '',
						})
					}
				>
					Создать
				</Button>
			</Form.Item>
		</Form>
	);
};
