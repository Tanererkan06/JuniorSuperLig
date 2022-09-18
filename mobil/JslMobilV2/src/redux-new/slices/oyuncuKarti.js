import { createOyuncuKarti, updateOyuncuKarti, deleteOyuncuKarti, deleteAllOyuncuKarti, getAllOyuncuKarti, getByIdOyuncuKarti, getAllPublishedOyuncuKarti } from '../actions/oyuncuKarti';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const oyuncuKartiSlice = createSlice({
    name: 'oyuncuKarti',
    initialState,
    extraReducers: {
        [createOyuncuKarti.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateOyuncuKarti.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteOyuncuKarti.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllOyuncuKarti.fulfilled]: (state, action) => {
            return [];
    },
        [getAllOyuncuKarti.fulfilled]: (state, action) => {
            return [...action.payload];
      },
        [getByIdOyuncuKarti.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedOyuncuKarti.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = oyuncuKartiSlice;
export default reducer;