import { Club } from '../../helpers/Club';
import { axiosClient } from '../client';

export const getAllClubs = async (): Promise<{ data: Club[] }> => {
	return await axiosClient.get(`Club/GetAllClubs`);
};

export const getClubById = async (id: string): Promise<{ data: Club }> => {
	return await axiosClient.get(`Club/GetClub?id=${id}`);
};

export const createClub = async (values: {
	title: string;
	description: string;
	userId: string;
	fullDescription: string;
}): Promise<{ data: Club }> => {
	return await axiosClient.post(
		`Club/CreateClub?title=${values.title}&description=${values.description}&userId=${values.userId}&fullDescription=${values.fullDescription}`,
	);
};

export const updateClub = async (values: {
	title: string;
	description: string;
	fullDescription: string;
	id: string;
}): Promise<any> => {
	return await axiosClient.post(
		`Club/EditClub?title=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&clubId=${values.id}`,
	);
};
