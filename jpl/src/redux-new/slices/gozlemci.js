import { createGozlemci, updateGozlemci, deleteGozlemci, deleteAllGozlemci, getAllGozlemci, getByIdGozlemci, getAllPublishedGozlemci, tumGozlemciler } from '../actions/gozlemci';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const gozlemciSlice = createSlice({
    name: 'gozlemci',
    initialState,
    extraReducers: {
        [createGozlemci.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateGozlemci.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteGozlemci.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllGozlemci.fulfilled]: (state, action) => {
            return [];
    },
        [getAllGozlemci.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdGozlemci.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedGozlemci.fulfilled]: (state, action) => {
            return [...action.payload]
    },
    },
        [tumGozlemciler.fulfilled]: (state, action) => {
            return [...action.payload]
    }
});

const { reducer } = gozlemciSlice;
export default reducer;