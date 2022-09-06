import { createOyunKonum, updateOyunKonum, deleteOyunKonum, deleteAllOyunKonum, getAllOyunKonum, getByIdOyunKonum, getAllPublishedOyunKonum } from '../actions/oyunKonum';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const oyunKonumSlice = createSlice({
    name: 'oyunKonum',
    initialState,
    extraReducers: {
        [createOyunKonum.fulfilled]: (state, action) => {
            state.push(action.meta.arg);
    },
        [updateOyunKonum.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteOyunKonum.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllOyunKonum.fulfilled]: (state, action) => {
            return [];
    },
        [getAllOyunKonum.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdOyunKonum.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedOyunKonum.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = oyunKonumSlice;
export default reducer;