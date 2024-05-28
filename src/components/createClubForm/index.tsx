import { Form, Input, Button } from 'antd';
import { IFieldData } from '../../helpers/FieldData';
import { useState } from 'react';
import { useCreateClub } from '@hooks/useCreateClub';
import { useTypedSelector } from '@store/hooks/baseHooks';
import TextArea from 'antd/es/input/TextArea';

export const CreateClubForm: React.FC = () => {
	const createClub = useCreateClub();
	const { id } = useTypedSelector((state) => state.user);
	const [fields, setFields] = useState<IFieldData[]>([]);
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	return (
		<>
			<input required type="file" placeholder="Название клуба" onChange={handleFileChange} />
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
							message: 'Введите название клуба',
						},
					]}
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
							createClub.mutate({
								title: fields[0].value,
								description: fields[1].value,
								userId: id,
								fullDescription: fields[2].value,
								file: file,
							})
						}
					>
						Создать
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
