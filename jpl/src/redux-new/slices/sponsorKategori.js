import { createSponsorKategori, updateSponsorKategori, deleteSponsorKategori, deleteAllSponsorKategori, getAllSponsorKategori, getByIdSponsorKategori, getAllPublishedSponsorKategori } from '../actions/sponsorKategori';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sponsorKategoriSlice = createSlice({
    name: 'sponsorKategori',
    initialState,
    extraReducers: {
        [createSponsorKategori.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSponsorKategori.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSponsorKategori.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSponsorKategori.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSponsorKategori.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdSponsorKategori.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSponsorKategori.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sponsorKategoriSlice;
export default reducer;