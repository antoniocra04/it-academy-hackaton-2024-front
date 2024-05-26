import { exitClub } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { removeClub } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useExitClub = () => {
	const dispatch = useTypedDispatch();
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof exitClub>[0]) => exitClub(values),
		onSuccess: (data) => {
			dispatch(removeClub(data.data));
		},
	});

	return loginMutation;
};
