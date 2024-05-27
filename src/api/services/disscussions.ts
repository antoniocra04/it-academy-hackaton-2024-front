import { axiosClient } from '../client';
import { Event } from '../../helpers/Event';
import { Disscussion } from '../../helpers/Disscussion';

export const createDisscussion = async (values: {
	title: string;
	description: string;
	clubId: string;
	fullDescription: string;
}): Promise<{ data: Disscussion }> => {
	return await axiosClient.post(
		`Discussion/CreateDiscussion?title=${values.title}&description=${values.description}&clubId=${values.clubId}&fullDescription=${values.fullDescription}`,
	);
};

export const getClubDisscussions = async (id: string): Promise<{ data: Event }> => {
	return await axiosClient.get(`Discussion/GetAllDiscussion?clubId=${id}`);
};
