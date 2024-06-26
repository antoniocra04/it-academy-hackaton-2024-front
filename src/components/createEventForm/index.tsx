import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import { useTypedSelector } from '@store/hooks/baseHooks';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'react-router-dom';
import { useCreateEvent } from '@hooks/useCreateEvent';

export const CreateEventForm: React.FC = () => {
	const createEvent = useCreateEvent();
	const { groupId } = useParams();
	const { id } = useTypedSelector((state) => state.user);
	const [fields, setFields] = useState<IFieldData[]>([]);
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

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
			<input required type="file" placeholder="Название клуба" onChange={handleFileChange} />
			<Form.Item
				name="name"
				rules={[
					{
						required: true,
						message: 'Введите название мероприятия',
					},
				]}
			>
				<Input placeholder="Название мероприятия" />
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
						createEvent.mutate({
							title: fields[0].value,
							description: fields[1].value,
							userId: id,
							clubId: groupId ? groupId : '',
							fullDescription: fields[2].value,
							file: file ? file : null,
						})
					}
				>
					Создать
				</Button>
			</Form.Item>
		</Form>
	);
};
