import { createOyunLive, updateOyunLive, deleteOyunLive, deleteAllOyunLive, getAllOyunLive, getByIdOyunLive, getAllPublishedOyunLive } from '../actions/oyunLive';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const oyunLiveSlice = createSlice({
    name: 'oyunLive',
    initialState,
    extraReducers: {
        [createOyunLive.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateOyunLive.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteOyunLive.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllOyunLive.fulfilled]: (state, action) => {
            return [];
    },
        [getAllOyunLive.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdOyunLive.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedOyunLive.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = oyunLiveSlice;
export default reducer;