import { createSponsorSureTuru, updateSponsorSureTuru, deleteSponsorSureTuru, deleteAllSponsorSureTuru, getAllSponsorSureTuru, getByIdSponsorSureTuru, getAllPublishedSponsorSureTuru } from '../actions/sponsorSureTuru';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sponsorSureTuruSlice = createSlice({
    name: 'sponsorSureTuru',
    initialState,
    extraReducers: {
        [createSponsorSureTuru.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSponsorSureTuru.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSponsorSureTuru.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSponsorSureTuru.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSponsorSureTuru.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdSponsorSureTuru.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSponsorSureTuru.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sponsorSureTuruSlice;
export default reducer;