import { updateUser } from '@api/services/user';
import { useTypedDispatch } from '@store/hooks/baseHooks';
import { editUser, setUser } from '@store/user/userSlice';
import { useMutation } from '@tanstack/react-query';

/**
 * Хук для изменения пользователя
 * @returns Объект запроса для изменения
 */

export const useUpdateUser = (onSuccess: () => void) => {
	const dispatch = useTypedDispatch();
	const updateUserMutation = useMutation({
		mutationFn: (values: Parameters<typeof updateUser>[0]) => updateUser(values),
		onSuccess: (data) => {
			dispatch(editUser(data.data));
			onSuccess();
		},
	});

	return updateUserMutation;
};
