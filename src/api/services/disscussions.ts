import { axiosClient } from '../client';
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

export const getClubDisscussions = async (id: string): Promise<{ data: Disscussion }> => {
	return await axiosClient.get(`Discussion/GetAllDiscussion?clubId=${id}`);
};

export const getDisscussionById = async (id: string): Promise<{ data: Disscussion }> => {
	return await axiosClient.get(`Discussion/GetDiscussionById?discussionsId=${id}`);
};

export const createComment = async (values: { id: string; text: string }): Promise<{ data: Disscussion }> => {
	return await axiosClient.post(`Discussion/CreateComment?discussionsId=${values.id}&commentariy=${values.text}`);
};

export const updateDisscussion = async (values: {
	title: string;
	description: string;
	fullDescription: string;
	id: string;
}): Promise<any> => {
	return await axiosClient.post(
		`Discussion/EditDiscussion?title=${values.title}&description=${values.description}&fullDescription=${values.fullDescription}&discussionId=${values.id}`,
	);
};

export const deleteDisscussion = async (id: string): Promise<any> => {
	return await axiosClient.delete(`Discussion/DeleteDiscussion?discussionsId=${id}`);
};
