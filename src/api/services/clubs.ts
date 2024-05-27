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
	file: File | null;
}): Promise<{ data: Club }> => {
	const formData = new FormData();
	if (values.file) {
		formData.append('file', values.file);
		formData.append('fileName', values.file.name);
	}

	return await axiosClient.post(
		`Club/CreateClub?title=${values.title}&description=${values.description}&userId=${values.userId}&fullDescription=${values.fullDescription}`,
		formData,
	);
};

export const updateClub = async (values: {
	title: string;
	description: string;
	fullDescription: string;
	id: string;
	file: File | null;
}): Promise<any> => {
	if (values.file) {
		const formData = new FormData();
		formData.append('file', values.file);
		formData.append('fileName', values.file.name);
		return await axiosClient.post(
			`Club/EditClub?title=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&clubId=${values.id}`,
			formData,
		);
	}

	return await axiosClient.post(
		`Club/EditClub?title=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&clubId=${values.id}`,
	);
};

export const deleteClub = async (id: string): Promise<any> => {
	return await axiosClient.delete(`Club/DeleteClub?id=${id}`);
};
