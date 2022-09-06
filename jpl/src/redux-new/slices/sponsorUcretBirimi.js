import { createSponsorUcretBirimi, updateSponsorUcretBirimi, deleteSponsorUcretBirimi, deleteAllSponsorUcretBirimi, getAllSponsorUcretBirimi, getByIdSponsorUcretBirimi, getAllPublishedSponsorUcretBirimi } from '../actions/sponsorUcretBirimi';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sponsorUcretBirimiSlice = createSlice({
    name: 'sponsorUcretBirimi',
    initialState,
    extraReducers: {
        [createSponsorUcretBirimi.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSponsorUcretBirimi.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSponsorUcretBirimi.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSponsorUcretBirimi.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSponsorUcretBirimi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdSponsorUcretBirimi.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSponsorUcretBirimi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sponsorUcretBirimiSlice;
export default reducer;