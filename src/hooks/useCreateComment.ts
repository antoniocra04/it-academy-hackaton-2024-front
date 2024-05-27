import { createComment, getDisscussionById } from '@api/services/disscussions';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для создания клуба
 * @returns Объект запроса на создание
 */
export const useCreateComment = (id: string) => {
	const disscussion = useQuery({ queryKey: ['disscussion'], queryFn: () => getDisscussionById(id), enabled: false });
	const createCommentMutation = useMutation({
		mutationFn: (values: Parameters<typeof createComment>[0]) => createComment(values),
		onSuccess: () => {
			disscussion.refetch();
		},
	});

	return createCommentMutation;
};
