import { getEvetntById } from '@api/services/event';
import { joinEvent } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { addEvent } from '@store/user/userSlice';
import { useMutation, useQuery } from '@tanstack/react-query';

/**
 * Хук для авторизации пользователя
 * @returns Объект запроса для авторизации
 */

export const useJoinEvent = (eventId: string) => {
	const dispatch = useTypedDispatch();
	const groups = useQuery({ queryKey: ['event'], queryFn: () => getEvetntById(eventId), enabled: false });
	const loginMutation = useMutation({
		mutationFn: (values: Parameters<typeof joinEvent>[0]) => joinEvent(values),
		onSuccess: (data) => {
			dispatch(addEvent(data.data));
			groups.refetch();
		},
	});

	return loginMutation;
};
