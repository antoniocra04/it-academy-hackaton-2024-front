import { deleteEvent } from '@api/services/event';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для удаления пользователя
 * @returns Объект запроса для удаление
 */

export const useDeleteEvent = () => {
	const navigate = useNavigate();
	const deleteClubMutation = useMutation({
		mutationFn: (values: Parameters<typeof deleteEvent>[0]) => deleteEvent(values),
		onSuccess: () => {
			navigate('/');
		},
	});

	return deleteClubMutation;
};
