import { createFiksturTakim, updateFiksturTakim, deleteFiksturTakim, deleteAllFiksturTakim, getAllFiksturTakim, getByIdFiksturTakim, getAllPublishedFiksturTakim } from '../actions/fiksturTakim';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const fiksturTakimSlice = createSlice({
    name: 'fiksturTakim',
    initialState,
    extraReducers: {
        [createFiksturTakim.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateFiksturTakim.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteFiksturTakim.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllFiksturTakim.fulfilled]: (state, action) => {
            return [];
    },
        [getAllFiksturTakim.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdFiksturTakim.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedFiksturTakim.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = fiksturTakimSlice;
export default reducer;