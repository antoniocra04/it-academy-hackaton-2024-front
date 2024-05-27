import { axiosClient } from '../client';
import { Event } from '../../helpers/Event';

export const createEvent = async (values: {
	title: string;
	description: string;
	userId: string;
	clubId: string;
	fullDescription: string;
	file: File | null;
}): Promise<{ data: Event }> => {
	const formData = new FormData();
	if (values.file) {
		formData.append('file', values.file);
		formData.append('fileName', values.file.name);
	}
	return await axiosClient.post(
		`Events/AddEvent?name=${values.title}&description=${values.description}&idUser=${values.userId}&idClub=${values.clubId}&fullDescription=${values.fullDescription}`,
		formData,
	);
};

export const getEvetntById = async (id: string): Promise<{ data: Event }> => {
	return await axiosClient.get(`Events/getEvent?id=${id}`);
};

export const updateEvent = async (values: {
	title: string;
	description: string;
	fullDescription: string;
	id: string;
	file: File | null;
}): Promise<any> => {
	const formData = new FormData();
	if (values.file) {
		formData.append('file', values.file);
		formData.append('fileName', values.file.name);
		return await axiosClient.post(
			`Events/EditEvent?name=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&eventId=${values.id}`,
			formData,
		);
	}

	return await axiosClient.post(
		`Events/EditEvent?name=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&eventId=${values.id}`,
	);
};

export const deleteEvent = async (id: string): Promise<any> => {
	return await axiosClient.delete(`Events/DeleteEvent?id=${id}`);
};
