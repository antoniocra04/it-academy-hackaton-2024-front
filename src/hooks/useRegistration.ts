import { registration } from '@api/services/auth';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { setUser } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для регистрации пользователя
 * @returns Объект запроса для регистрации
 */

export const useRegistration = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();
	const regMutation = useMutation({
		mutationFn: (values: Parameters<typeof registration>[0]) => registration(values),
		onSuccess: (data) => {
			dispatch(setUser(data.data));
			navigate('/');
		},
	});

	return regMutation;
};
