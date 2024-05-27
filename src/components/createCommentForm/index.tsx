import { useState } from 'react';
import { IFieldData } from '../../helpers/FieldData';
import { Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useCreateComment } from '@hooks/useCreateComment';
import { useParams } from 'react-router-dom';

export const CreateCommentForm: React.FC = () => {
	const { id } = useParams();
	const [fields, setFields] = useState<IFieldData[]>([]);
	const createComment = useCreateComment(id ? id : '');

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
				name="comment"
				rules={[
					{
						required: true,
						message: 'Введите комментарий',
					},
				]}
			>
				<TextArea style={{ resize: 'none', height: 150 }} placeholder="Текст комментария" />
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: 200, float: 'right' }}
					onClick={() =>
						createComment.mutate({
							text: fields[0].value,
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
