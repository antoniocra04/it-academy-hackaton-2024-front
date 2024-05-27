import { updateDisscussion } from '@api/services/disscussions';
import { useMutation } from '@tanstack/react-query';
/**
 * Хук для изменения пользователя
 * @returns Объект запроса для изменения
 */

export const useEditDisscussion = (onSuccess: () => void) => {
	const updateDisscussionMutation = useMutation({
		mutationFn: (values: Parameters<typeof updateDisscussion>[0]) => updateDisscussion(values),
		onSuccess: () => {
			onSuccess();
		},
	});

	return updateDisscussionMutation;
};
