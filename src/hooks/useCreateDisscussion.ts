import { createDisscussion } from '@api/services/disscussions';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для создание мероприятия
 * @returns Объект запроса на создание
 */

export const useCreateDisscussion = () => {
	const navigate = useNavigate();
	const createDisscussionMutation = useMutation({
		mutationFn: (values: Parameters<typeof createDisscussion>[0]) => createDisscussion(values),
		onSuccess: (data) => {
			navigate(`/group/${data.data.clubId}`);
		},
	});

	return createDisscussionMutation;
};
