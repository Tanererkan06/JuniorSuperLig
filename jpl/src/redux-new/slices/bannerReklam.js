import { createBannerReklam, updateBannerReklam, deleteBannerReklam, deleteAllBannerReklam, getAllBannerReklam, getByIdBannerReklam, getAllPublishedBannerReklam } from '../actions/bannerReklam';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const bannerReklamSlice = createSlice({
    name: 'bannerReklam',
    initialState,
    extraReducers: {
        [createBannerReklam.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateBannerReklam.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteBannerReklam.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllBannerReklam.fulfilled]: (state, action) => {
            return [];
    },
        [getAllBannerReklam.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdBannerReklam.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedBannerReklam.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = bannerReklamSlice;
export default reducer;