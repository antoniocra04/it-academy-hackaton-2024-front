import { useTypedDispatch } from '@store/hooks/baseHooks';
import { logout } from '@store/user/userSlice';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для выхода из аккаунта
 * @returns Функция для выхода из аккаунта
 */

export const useLogout = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const userLogout = () => {
		dispatch(logout());
		navigate('/login');
	};

	return userLogout;
};
