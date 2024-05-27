import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useEditClub } from '@hooks/useEditClub';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getClubById } from '@api/services/clubs';

interface EditClubFormProps {
	onSuccess: () => void;
}

export const EditClubForm: React.FC<EditClubFormProps> = ({ onSuccess }) => {
	const editClub = useEditClub(onSuccess);
	const { groupId } = useParams();
	const group = useQuery({ queryKey: ['group'], queryFn: () => getClubById(groupId ? groupId : '') });
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
						message: 'Введите название клуба',
					},
				]}
				initialValue={group.data?.data.title}
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
				initialValue={group.data?.data.description}
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
				initialValue={group.data?.data.fullDescription}
			>
				<TextArea style={{ resize: 'none', height: 150 }} placeholder="Полное описание" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '100%' }}
					onClick={() =>
						editClub.mutate({
							title: fields[0].value,
							description: fields[1].value,
							fullDescription: fields[2].value,
							id: groupId ? groupId : '',
							file: file ? file : null,
						})
					}
				>
					Изменить
				</Button>
			</Form.Item>
		</Form>
	);
};
