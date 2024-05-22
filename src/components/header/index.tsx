import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './style.module.scss';
import { Button } from 'antd';

export const Header: React.FC = () => {
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
							<Link to={'/tickets'} className={styles.menuLink}>
								Группы
							</Link>
						</li>
					</ul>
				</nav>
				<Button type="primary">Выйти</Button>
			</div>
		</header>
	);
};
