import { updateClub } from '@api/services/clubs';
import { useMutation } from '@tanstack/react-query';
/**
 * Хук для изменения пользователя
 * @returns Объект запроса для изменения
 */

export const useEditClub = (onSuccess: () => void) => {
	const updateUserMutation = useMutation({
		mutationFn: (values: Parameters<typeof updateClub>[0]) => updateClub(values),
		onSuccess: () => {
			onSuccess();
		},
	});

	return updateUserMutation;
};
