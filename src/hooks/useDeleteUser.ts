import { deleteUser } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { logout } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для удаления пользователя
 * @returns Объект запроса для удаление
 */

export const useDeleteUser = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const loginMutation = useMutation({
		mutationFn: () => deleteUser(),
		onSuccess: () => {
			dispatch(logout());
			navigate('/');
		},
	});

	return loginMutation;
};
