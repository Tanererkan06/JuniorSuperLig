import { createPuanDurumu, updatePuanDurumu, deletePuanDurumu, deleteAllPuanDurumu, getAllPuanDurumu, getByIdPuanDurumu, getAllPublishedPuanDurumu } from '../actions/puanDurumu';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const puanDurumuSlice = createSlice({
    name: 'puanDurumu',
    initialState,
    extraReducers: {
        [createPuanDurumu.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updatePuanDurumu.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deletePuanDurumu.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllPuanDurumu.fulfilled]: (state, action) => {
            return [];
    },
        [getAllPuanDurumu.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdPuanDurumu.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedPuanDurumu.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = puanDurumuSlice;
export default reducer;