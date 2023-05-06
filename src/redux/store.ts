import { configureStore } from '@reduxjs/toolkit';
import userSlice from './UserSlice/userSlice';
import HoverUserSlice from './HoverUserSlice/HoverUserSlice';

export const store = configureStore({
	reducer: {
		data: userSlice,
		hoverData: HoverUserSlice,
	},
});
