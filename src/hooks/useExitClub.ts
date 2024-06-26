import { getAllClubs } from '@api/services/clubs';
import { exitClub } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { removeClub } from '@store/user/userSlice';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useExitClub = () => {
	const dispatch = useTypedDispatch();
	const groups = useQuery({ queryKey: ['groups'], queryFn: getAllClubs, enabled: false });
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof exitClub>[0]) => exitClub(values),
		onSuccess: (data) => {
			dispatch(removeClub(data.data));
			groups.refetch();
		},
	});

	return loginMutation;
};
