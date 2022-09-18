import { createHakem, updateHakem, deleteHakem, deleteAllHakem, getAllHakem, getByIdHakem, getAllPublishedHakem } from '../actions/hakem';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const hakemSlice = createSlice({
    name: 'hakem',
    initialState,
    extraReducers: {
        [createHakem.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateHakem.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteHakem.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllHakem.fulfilled]: (state, action) => {
            return [];
    },
        [getAllHakem.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdHakem.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedHakem.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = hakemSlice;
export default reducer;