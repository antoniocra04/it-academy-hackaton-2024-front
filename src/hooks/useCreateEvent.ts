import { createEvent } from '@api/services/event';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для создание мероприятия
 * @returns Объект запроса на создание
 */

export const useCreateEvent = () => {
	const navigate = useNavigate();
	const createEventMutation = useMutation({
		mutationFn: (values: Parameters<typeof createEvent>[0]) => createEvent(values),
		onSuccess: (data) => {
			navigate(`/group/${data.data.clubID}`);
		},
	});

	return createEventMutation;
};
