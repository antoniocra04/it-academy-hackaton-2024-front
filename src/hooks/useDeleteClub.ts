import { deleteClub } from '@api/services/clubs';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для удаления пользователя
 * @returns Объект запроса для удаление
 */

export const useDeleteClub = () => {
	const navigate = useNavigate();
	const deleteClubMutation = useMutation({
		mutationFn: (values: Parameters<typeof deleteClub>[0]) => deleteClub(values),
		onSuccess: () => {
			navigate('/');
		},
	});

	return deleteClubMutation;
};
