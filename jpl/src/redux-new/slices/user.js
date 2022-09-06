// import { createSlice } from '@reduxjs/toolkit'
// import { createUser, updateUser, deleteUser, deleteAllUser, getAllUser, getByIdUser, getAllPublishedUser } from '../actions/user';

// const initialState = {
//     users: [
//         {
//             username: null,
//             email: null,
//             password: null,
//             roles: [],
//             createdAt: null,
//             updatedAt: null,
//             id: null,
//         }
//     ]   
// }

// export const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     extraReducers: {
//         [createUser.fulfilled]: (state, action) => {
//             state.users.push(action.meta.arg);
//     },
//         [updateUser.fulfilled]: (state, action) => {
//             const index = state.users.findIndex(item => item.id === action.meta.arg.id);
//             state.users[index] = {
//                 ...state.users[index],
//                 ...action.meta.arg.data
//         }
//     },
//         [deleteUser.fulfilled]: (state, action) => {
//             let index = state.users.findIndex(({ id }) => id === action.payload);
//             if(index !== -1) {
//                 state.users.splice(index, 1);
//             }        
//     },
//         [deleteAllUser.fulfilled]: (state, action) => {
//             return [];
//     },
//         [getAllUser.fulfilled]: (state, action) => {
//             // return [...action.payload]
//             state.users = action.payload;
//             console.log(state, action);
//             // return [...action.payload];
//             return action.payload;
//     },
//         [getByIdUser.fulfilled]: (state, action) => {
//             return [...action.payload];
//     },
//         [getAllPublishedUser.fulfilled]: (state, action) => {
//             // return [...action.payload]
//             return [...action.meta.arg]
//     },
// }});

// const { reducer } = userSlice;
// export default reducer;