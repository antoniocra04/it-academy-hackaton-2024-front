import { deleteUserByAdmin } from '@api/services/user';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для удаления пользователя
 * @returns Объект запроса для удаление
 */

export const useDeleteUserByAdmin = (refetch: () => void) => {
	const loginMutation = useMutation({
		mutationFn: (userLogin: Parameters<typeof deleteUserByAdmin>[0]) => deleteUserByAdmin(userLogin),
		onSuccess: () => {
			refetch();
		},
	});

	return loginMutation;
};
