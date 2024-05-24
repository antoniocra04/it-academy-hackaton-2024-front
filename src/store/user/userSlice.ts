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
			state.id = action.payload.id;
			state.login = action.payload.login;
			state.name = action.payload.name;
			state.surname = action.payload.surname;
			state.fatherland = action.payload.fatherland;
			state.password = action.payload.password;
			state.role = action.payload.role;
		},
		logout: () => initialState,
	},
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState): User => state.user;
export default userSlice.reducer;
