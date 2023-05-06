// import UserRecord from '../components/UserRecord.json';
// import { User } from '../interface/User';
// import { SET_USER } from './userType';

// export interface UserState {
// 	users: User[];
// }

// const initialState: UserState = {
// 	users: UserRecord,
// };

// const dataReducer = (state = initialState, action: any) => {
// 	switch (action.type) {
// 		case SET_USER:
// 			return {
// 				...state,
// 				users: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export default dataReducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserRecord from '../components/UserRecord.json';
import { User } from '../interface/User';

interface UserState {
	users: User[];
}

const initialState: UserState = {
	users: UserRecord,
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
	},
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
