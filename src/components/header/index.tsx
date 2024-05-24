import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { Button } from 'antd';
import { useLogout } from '@hooks/useLogout';
import { useTypedSelector } from '@store/hooks/baseHooks';

export const Header: React.FC = () => {
	const logout = useLogout();
	const navigate = useNavigate();
	const user = useTypedSelector((state) => state.user);

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<nav className={styles.headerMenu}>
					<Link to="/afisha" className={styles.headerLogo}>
						<img src="../Logo.png" alt="" className={styles.logoImage} />
					</Link>
					<ul className={styles.menuList}>
						<li className={styles.menuItem}>
							<Link to={'/profile'} className={styles.menuLink}>
								Профиль
							</Link>
						</li>
						<li className={styles.menuItem}>
							<Link to={'/'} className={styles.menuLink}>
								Клубы
							</Link>
						</li>
						{user.role ? (
							<li className={styles.menuItem}>
								<Link to={'/users'} className={styles.menuLink}>
									Пользователи
								</Link>
							</li>
						) : (
							''
						)}
					</ul>
				</nav>
				{user.id ? (
					<Button type="primary" onClick={logout}>
						Выйти
					</Button>
				) : (
					<Button type="primary" onClick={() => navigate('/login')}>
						Войти
					</Button>
				)}
			</div>
		</header>
	);
};