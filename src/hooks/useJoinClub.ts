import { joinClub } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { addClub } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useJoinClub = () => {
	const dispatch = useTypedDispatch();
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof joinClub>[0]) => joinClub(values),
		onSuccess: (data) => {
			dispatch(addClub(data.data));
		},
	});

	return loginMutation;
};
