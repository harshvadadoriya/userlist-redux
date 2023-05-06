import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './userSlice';

export const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});
