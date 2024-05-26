import { makeAdmin } from '@api/services/user';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useMakeAdmin = (refetch: () => void) => {
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof makeAdmin>[0]) => makeAdmin(values),
		onSuccess: () => {
			refetch();
		},
	});

	return loginMutation;
};
