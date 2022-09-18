// import { createAsyncThunk } from '@reduxjs/toolkit'
// import UserService from '../../services/UserService';

// const _userServis = new UserService();

// export const createUser = createAsyncThunk(
//     'user/create',
//     async(payload) => {
//         const response = await _userServis.create(payload);
//         return response;
//     }
// )

// export const updateUser = createAsyncThunk(
//     "user/update",
//     async (payload) => {
//         const response = await _userServis.update(payload);
//         return response;
//     }
//   );


// export const deleteUser = createAsyncThunk(
//     "user/delete",
//     async (payload) => {
//       await _userServis.delete(payload.id);
//       return payload.id;
//     }
//   );

// export const deleteAllUser = createAsyncThunk(
//     'user/deleteAll',
//     async() => {
//         const response = await _userServis.deleteAll();
//         return response;
//     }
// )

// export const getAllUser = createAsyncThunk(
//     'user/getAll',
//     async() => {
//         const response = await _userServis.getAll();
//         return response;
//     }
// )

// export const getByIdUser = createAsyncThunk(
//     'user/getById',
//     async(payload) => {
//         const response = await _userServis.getById(payload);
//         return response;
//     }
// )

// export const getAllPublishedUser = createAsyncThunk(
//     'user/getAllPublished',
//     async() => {
//         const response = await _userServis.getAllPublished();
//         return response;
//     }
// )
