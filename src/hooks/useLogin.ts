import { login } from '@api/services/auth';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { setUser } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof login>[0]) => login(values),
		onSuccess: (data) => {
			dispatch(setUser(data));
			navigate('/groups');
		},
	});

	return loginMutation;
};
