import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

export const LoginPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.loginFormContainer}>
			<Form
				name="normal_login"
				initialValues={{
					remember: true,
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
						Войти
					</Button>
					или <a onClick={() => navigate('/registration')}>создать аккаунт</a>
				</Form.Item>
			</Form>
		</div>
	);
};
