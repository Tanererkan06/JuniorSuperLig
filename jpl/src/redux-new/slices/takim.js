import { createTakim, updateTakim, deleteTakim, deleteAllTakim, getAllTakim, getByIdTakim, getAllPublishedTakim } from '../actions/takim';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const takimSlice = createSlice({
    name: 'takim',
    initialState,
    extraReducers: {
        [createTakim.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateTakim.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteTakim.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllTakim.fulfilled]: (state, action) => {
            return [];
    },
        [getAllTakim.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdTakim.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedTakim.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = takimSlice;
export default reducer;