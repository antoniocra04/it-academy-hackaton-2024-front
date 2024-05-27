import { getEvetntById } from '@api/services/event';
import { exitEvent } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { removeClub, removeEvent } from '@store/user/userSlice';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useExitEvent = (eventId: string) => {
	const dispatch = useTypedDispatch();
	const groups = useQuery({ queryKey: ['event'], queryFn: () => getEvetntById(eventId), enabled: false });
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof exitEvent>[0]) => exitEvent(values),
		onSuccess: (data) => {
			dispatch(removeEvent(data.data));
			groups.refetch();
		},
	});

	return loginMutation;
};
