import { User } from '../../helpers/User';
import { axiosClient } from '../client';

export const updateUser = async (values: User): Promise<any> => {
	return await axiosClient.post(
		`EditUser?login=${values.login}&password=${values.password}&name=${values.name}&surname=${values.surname}&fatherland=${values.fatherland}`,
	);
};

export const getAllUsers = async (): Promise<{ data: { $values: User[] } }> => {
	return await axiosClient.get(`GetUsers`);
};

export const deleteUser = async (values: User): Promise<any> => {
	return await axiosClient.delete(`DeleteUser?login=${values.login}&password=${values.password}`);
};
