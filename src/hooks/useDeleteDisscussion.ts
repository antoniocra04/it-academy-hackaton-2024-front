import { deleteDisscussion } from '@api/services/disscussions';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

/**
 * Хук для удаления пользователя
 * @returns Объект запроса для удаление
 */

export const useDeleteDisscussion = () => {
	const navigate = useNavigate();
	const deleteClubMutation = useMutation({
		mutationFn: (values: Parameters<typeof deleteDisscussion>[0]) => deleteDisscussion(values),
		onSuccess: () => {
			navigate('/');
		},
	});

	return deleteClubMutation;
};
