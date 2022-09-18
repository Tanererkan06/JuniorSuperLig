import { createIlTemsilcisi, updateIlTemsilcisi, deleteIlTemsilcisi, deleteAllIlTemsilcisi, getAllIlTemsilcisi, getByIdIlTemsilcisi, getAllPublishedIlTemsilcisi } from '../actions/ilTemsilcisi';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const ilTemsilcisiSlice = createSlice({
    name: 'ilTemsilcisi',
    initialState,
    extraReducers: {
        [createIlTemsilcisi.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateIlTemsilcisi.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteIlTemsilcisi.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllIlTemsilcisi.fulfilled]: (state, action) => {
            return [];
    },
        [getAllIlTemsilcisi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdIlTemsilcisi.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedIlTemsilcisi.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = ilTemsilcisiSlice;
export default reducer;