import { createSponsorSuresi, updateSponsorSuresi, deleteSponsorSuresi, deleteAllSponsorSuresi, getAllSponsorSuresi, getByIdSponsorSuresi, getAllPublishedSponsorSuresi } from '../actions/sponsorSuresi';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sponsorSuresiSlice = createSlice({
    name: 'sponsorSuresi',
    initialState,
    extraReducers: {
        [createSponsorSuresi.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSponsorSuresi.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSponsorSuresi.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSponsorSuresi.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSponsorSuresi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdSponsorSuresi.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSponsorSuresi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sponsorSuresiSlice;
export default reducer;