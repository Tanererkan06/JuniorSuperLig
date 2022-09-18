import { createVeli, updateVeli, deleteVeli, deleteAllVeli, getAllVeli, getByIdVeli, getAllPublishedVeli } from '../actions/veli';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const veliSlice = createSlice({
    name: 'veli',
    initialState,
    extraReducers: {
        [createVeli.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateVeli.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state.veliler[index],
                ...action.payload
        }
    },
        [deleteVeli.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllVeli.fulfilled]: (state, action) => {
            return [];
    },
        [getAllVeli.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdVeli.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedVeli.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = veliSlice;
export default reducer;