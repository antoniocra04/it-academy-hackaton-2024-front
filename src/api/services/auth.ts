import { axiosClient } from '../client';

export const login = async (values: { email: string; password: string }): Promise<any> => {
	return await axiosClient.post(`Users/logIn`, {
		login: values.email,
		password: values.password,
	});
};

export const registration = async (values: { email: string; password: string }): Promise<any> => {
	return await axiosClient.post(`Users/singUp`, {
		login: values.email,
		password: values.password,
	});
};
