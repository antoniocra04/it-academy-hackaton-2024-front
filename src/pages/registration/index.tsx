import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { useState } from 'react';

interface FieldData {
	name: string | number | (string | number)[];
	value?: any;
	touched?: boolean;
	validating?: boolean;
	errors?: string[];
}

export const RegistrationPage: React.FC = () => {
	const navigate = useNavigate();
	const [fields, setFields] = useState<FieldData[]>([]);

	return (
		<div className={styles.loginFormContainer}>
			<Form
				name="normal_login"
				initialValues={{
					remember: true,
				}}
				fields={fields}
				onFieldsChange={(_, allFields) => {
					setFields(allFields);
				}}
				className={styles.loginForm}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: 'Введите логин',
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
				<Form.Item
					name="password-repeate"
					rules={[
						{
							required: true,
							message: 'Повторите пароль',
						},
						{
							pattern: fields[1] ? new RegExp(fields[1].value) : new RegExp(''),
							message: 'Пароли не сходятся',
						},
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Повторите пароль"
					/>
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
					<Button type="primary" htmlType="submit" className={styles.loginButton}>
						Создать аккаунт
					</Button>
					или <a onClick={() => navigate('/login')}>войти</a>
				</Form.Item>
			</Form>
		</div>
	);
};
