import { User } from '../../helpers/User';
import { axiosClient } from '../client';

export const updateUser = async (values: User): Promise<any> => {
	return await axiosClient.post(
		`Users/EditUser?name=${values.name}&surname=${values.surname}&fatherland=${values.fatherland}`,
	);
};

export const getAllUsers = async (): Promise<{ data: User[] }> => {
	return await axiosClient.get(`Users/GetUsers`);
};

export const deleteUser = async (): Promise<any> => {
	return await axiosClient.delete(`Users/DeleteUser`);
};

export const deleteUserByAdmin = async (userLogin: string): Promise<any> => {
	return await axiosClient.delete(`Users/DeleteUserByAdmin?userLogin=${userLogin}`);
};

export const joinClub = async (clubId: string): Promise<any> => {
	return await axiosClient.post(`Users/JoinInClub?clubId=${clubId}`);
};
