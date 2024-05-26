import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { IFieldData } from '../../helpers/FieldData';
import { useLogin } from '@hooks/useLogin';
import { useState } from 'react';
import styles from './style.module.scss';

interface LoginFormProps {
	onError: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onError }) => {
	const navigate = useNavigate();
	const [fields, setFields] = useState<IFieldData[]>([]);
	const loginQuery = useLogin(onError);

	const login = () => {
		for (let field of fields) {
			if (field.errors?.length || !field.value) return;
		}
		loginQuery.mutate({ email: fields[0].value, password: fields[1].value });
	};

	return (
		<Form
			name="normal_login"
			initialValues={{
				remember: true,
			}}
			className={styles.loginForm}
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
						type: 'email',
						message: 'Введите корректный email адресс',
					},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Введите пароль',
					},
				]}
			>
				<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Пароль" />
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Запомнить меня</Checkbox>
				</Form.Item>

				<a className={styles.forgotButton} href="">
					Забыл пароль
				</a>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className={styles.loginButton} onClick={login}>
					Войти
				</Button>
				или <a onClick={() => navigate('/registration')}>создать аккаунт</a>
			</Form.Item>
		</Form>
	);
};
