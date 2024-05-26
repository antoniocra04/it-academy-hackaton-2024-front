import { axiosClient } from '../client';
import { Event } from '../../helpers/Event';

export const createEvent = async (values: {
	title: string;
	description: string;
	userId: string;
	clubId: string;
}): Promise<{ data: Event }> => {
	return await axiosClient.post(
		`Events/AddEvent?name=${values.title}&description=${values.description}&idUser=${values.userId}&idClub=${values.clubId}`,
	);
};

export const getEvetntById = async (id: string): Promise<{ data: Event }> => {
	return await axiosClient.get(`Events/getEvent?id=${id}`);
};