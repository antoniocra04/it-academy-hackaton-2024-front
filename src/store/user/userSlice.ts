import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../index';
import { User } from '../../helpers/User';

interface UserState extends User {
	token: string;
}

interface SetUserPayload {
	user: User;
	access_token: string;
}

const initialState: UserState = {
	id: '',
	name: '',
	surname: '',
	fatherland: '',
	login: '',
	password: '',
	clubsId: [],
	role: 0,
	token: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<SetUserPayload>) => {
			state.id = action.payload.user.id;
			state.login = action.payload.user.login;
			state.name = action.payload.user.name;
			state.surname = action.payload.user.surname;
			state.fatherland = action.payload.user.fatherland;
			state.password = action.payload.user.password;
			state.role = action.payload.user.role;
			state.token = action.payload.access_token;
			state.clubsId = [...action.payload.user.clubsId];
		},
		editUser: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.surname = action.payload.surname;
			state.fatherland = action.payload.fatherland;
		},
		addClub: (state, action: PayloadAction<string>) => {
			console.log(state.clubsId);
			state.clubsId = [...state.clubsId, action.payload];
		},
		removeClub: (state, action: PayloadAction<string>) => {
			state.clubsId = [...state.clubsId.filter((c) => c != action.payload)];
		},
		logout: () => initialState,
	},
});

export const { setUser, logout, editUser, addClub, removeClub } = userSlice.actions;
export const selectUser = (state: RootState): User => state.user;
export default userSlice.reducer;
