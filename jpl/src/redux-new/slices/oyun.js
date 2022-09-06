import { createOyun, updateOyun, deleteOyun, deleteAllOyun, getAllOyun, getByIdOyun, getAllPublishedOyun } from '../../redux-new/actions/oyun';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const oyunSlice = createSlice({
    name: "oyun",
    initialState,
    extraReducers: {
            [createOyun.fulfilled]: (state, action) => {
                state.push(action.payload);
        },
            [updateOyun.fulfilled]: (state, action) => {
                const index = state.findIndex(item => item.id === action.payload.id);
                state[index] = {
                    ...state[index],
                    ...action.payload
            }
        },
            [deleteOyun.fulfilled]: (state, action) => {
                let index = state.findIndex(({ id }) => id === action.payload.id);
                if(index !== -1) {
                    state.splice(index, 1);
                }        
        },
            [deleteAllOyun.fulfilled]: (state, action) => {
                return [];
        },
            [getAllOyun.fulfilled]: (state, action) => {
                return [...action.payload]
        },
            [getByIdOyun.fulfilled]: (state, action) => {
                return [...action.payload];
        },
            [getAllPublishedOyun.fulfilled]: (state, action) => {
                return [...action.payload]
        },
}});

const { reducer } = oyunSlice;
export default reducer;
