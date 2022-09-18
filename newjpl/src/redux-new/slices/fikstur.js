import { createFikstur, updateFikstur, deleteFikstur, deleteAllFikstur, getAllFikstur, getByIdFikstur, getAllPublishedFikstur } from '../actions/fikstur';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const fiksturSlice = createSlice({
    name: 'fikstur',
    initialState,
    extraReducers: {
        [createFikstur.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateFikstur.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteFikstur.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllFikstur.fulfilled]: (state, action) => {
            return [];
    },
        [getAllFikstur.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdFikstur.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedFikstur.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = fiksturSlice;
export default reducer;