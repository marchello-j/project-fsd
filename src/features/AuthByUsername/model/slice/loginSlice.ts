import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services//loginByUsername/loginByUsername';

const initialState: loginSchema = {
	isLoading: false,
	username: '',
	password: '',
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername: (state, actions: PayloadAction<string>) => {
			state.username = actions.payload;
		},
		setPassword: (state, actions: PayloadAction<string>) => {
			state.password = actions.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
