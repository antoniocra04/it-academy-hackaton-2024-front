import { createClub } from '@api/services/clubs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для создания клуба
 * @returns Объект запроса на создание
 */

export const useCreateClub = () => {
	const navigate = useNavigate();
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof createClub>[0]) => createClub(values),
		onSuccess: () => {
			navigate('/');
		},
	});

	return loginMutation;
};
