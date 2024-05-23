import { axiosClient } from '../client';

export const login = async (values: { email: string; password: string }): Promise<any> => {
	return await axiosClient.post(`loginIn?login=${values.email}&password=${values.password}`);
};

export const registration = async (values: { email: string; password: string }): Promise<any> => {
	return await axiosClient.post(`singUp?login=${values.email}&password=${values.password}`);
};
