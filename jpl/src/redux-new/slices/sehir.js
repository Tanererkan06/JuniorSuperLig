import { createSehir, updateSehir, deleteSehir, deleteAllSehir, getAllSehir, getByIdSehir, getAllPublishedSehir } from '../actions/sehir';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sehirSlice = createSlice({
    name: 'sehir',
    initialState,
    extraReducers: {
        [createSehir.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSehir.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSehir.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSehir.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSehir.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdSehir.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSehir.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sehirSlice;
export default reducer;