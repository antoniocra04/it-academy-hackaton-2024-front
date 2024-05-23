import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../index';
import { User } from '../../helpers/User';

interface UserState extends User {}

const initialState: UserState = {
	id: '',
	name: '',
	surname: '',
	fatherland: '',
	login: '',
	password: '',
	role: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState): User => state.user;
export default userSlice.reducer;
