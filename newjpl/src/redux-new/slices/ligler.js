import { createLigler, updateLigler, deleteLigler, deleteAllLigler, getAllLigler, getByIdLigler, getAllPublishedLigler } from '../actions/ligler';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const liglerSlice = createSlice({
    name: 'ligler',
    initialState,
    extraReducers: {
        [createLigler.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateLigler.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteLigler.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllLigler.fulfilled]: (state, action) => {
            return [];
    },
        [getAllLigler.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdLigler.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedLigler.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = liglerSlice;
export default reducer;