import { createSponsor, updateSponsor, deleteSponsor, deleteAllSponsor, getAllSponsor, getByIdSponsor, getAllPublishedSponsor } from '../actions/sponsor';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sponsorSlice = createSlice({
    name: 'sponsor',
    initialState,
    extraReducers: {
        [createSponsor.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSponsor.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSponsor.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSponsor.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSponsor.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdSponsor.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSponsor.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sponsorSlice;
export default reducer;