import { login } from '@api/services/auth';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { setUser } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useLogin = (onError: () => void) => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof login>[0]) => login(values),
		onSuccess: (data) => {
			console.log(data.data);
			dispatch(setUser(data.data));
			navigate('/');
		},
		onError: () => {
			onError();
		},
	});

	return loginMutation;
};
