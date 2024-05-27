import { updateEvent } from '@api/services/event';
import { useMutation } from '@tanstack/react-query';
/**
 * Хук для изменения пользователя
 * @returns Объект запроса для изменения
 */

export const useEditEvent = (onSuccess: () => void) => {
	const updateEventMutation = useMutation({
		mutationFn: (values: Parameters<typeof updateEvent>[0]) => updateEvent(values),
		onSuccess: () => {
			onSuccess();
		},
	});

	return updateEventMutation;
};
