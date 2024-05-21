import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './style.module.scss';

export const LoginPage: React.FC = () => {
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
							message: 'Введите имя пользователя',
						},
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
					<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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
					или <a href="">создать аккаунт</a>
				</Form.Item>
			</Form>
		</div>
	);
};
