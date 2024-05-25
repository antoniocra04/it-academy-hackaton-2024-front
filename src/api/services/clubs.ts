import { Club } from '../../helpers/Club';
import { axiosClient } from '../client';

export const getAllClubs = async (): Promise<{ data: { $values: Club[] } }> => {
	return await axiosClient.get(`GetAllClubs`);
};

export const getClubById = async (id: string): Promise<{ data: Club }> => {
	return await axiosClient.get(`GetClub?id=${id}`);
};

export const createClub = async (values: {
	title: string;
	description: string;
	userId: string;
}): Promise<{ data: Club }> => {
	return await axiosClient.post(
		`CreateClub?title=${values.title}&description=${values.description}&userId=${values.userId}`,
	);
};
