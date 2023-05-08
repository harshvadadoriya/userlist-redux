// import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { User } from '../../interface/User';
// import { RootState } from '../store';

// export interface UserState {
// 	users: User[];
// 	status: 'idle' | 'loading' | 'succeeded' | 'failed';
// 	error: string | null;
// 	currentPage: number;
// }

// const initialState: UserState = {
// 	users: [],
// 	status: 'idle',
// 	error: null,
// 	currentPage: 0,
// };

// export const fetchUsers = createAsyncThunk(
// 	'users/fetchUsers',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const response = await fetch(
// 				`https://user-list-server-node.vercel.app/person/p?page=0}&limit=8`
// 			);
// 			const data = await response.json();
// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );

// const userSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	reducers: {
// 		setCurrentPage: (state, action: PayloadAction<number>) => {
// 			state.currentPage = action.payload;
// 		},
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(fetchUsers.pending, (state) => {
// 				state.status = 'loading';
// 				state.error = null;
// 			})
// 			.addCase(fetchUsers.fulfilled, (state, action) => {
// 				state.status = 'succeeded';
// 				state.users = action.payload.users;
// 			})
// 			.addCase(fetchUsers.rejected, (state, action) => {
// 				state.status = 'failed';
// 				state.error = action.error.message as string;
// 			});
// 	},
// });

// export const { setCurrentPage } = userSlice.actions;
// export default userSlice.reducer;

// export const selectUsers = (state: RootState) => state.data.users;
// export const selectStatus = (state: RootState) => state.data.status;
// export const selectError = (state: RootState) => state.data.error;
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../interface/User';
import { RootState } from '../store';

export interface UserState {
	users: User[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
	currentPage: number;
	totalPage: number;
}

const initialState: UserState = {
	users: [],
	status: 'idle',
	error: null,
	currentPage: 0,
	totalPage: 30,
};

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (page: number, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://user-list-server-node.vercel.app/person/p?page=${page}&limit=8`
			);
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.users = action.payload.users;
				state.currentPage = action.payload.currentPage;
				state.totalPage = action.payload.totalPage;
				state.error = null;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message as string;
			});
	},
});

export const { setCurrentPage } = userSlice.actions;
export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.data.users;
export const selectStatus = (state: RootState) => state.data.status;
export const selectError = (state: RootState) => state.data.error;
export const selectCurrentPage = (state: RootState) => state.data.currentPage;
export const selectTotalPage = (state: RootState) => state.data.totalPage;
