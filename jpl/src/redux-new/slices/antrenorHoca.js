import { createAntrenorHoca, updateAntrenorHoca, deleteAntrenorHoca, deleteAllAntrenorHoca, getAllAntrenorHoca, getByIdAntrenorHoca, getAllPublishedAntrenorHoca } from '../actions/antrenorHoca';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const antrenorHocaSlice = createSlice({
    name: "antrenorHoca",
    initialState,
    extraReducers: {
            [createAntrenorHoca.fulfilled]: (state, action) => {
                state.push(action.payload);
        },
            [updateAntrenorHoca.fulfilled]: (state, action) => {
                const index = state.findIndex(item => item.id === action.payload.id);
                state[index] = {
                    ...state[index],
                    ...action.payload
            }
        },
            [deleteAntrenorHoca.fulfilled]: (state, action) => {
                let index = state.findIndex(({ id }) => id === action.payload.id);
                if(index !== -1) {
                    state.splice(index, 1);
                }        
        },
            [deleteAllAntrenorHoca.fulfilled]: (state, action) => {
                return [];
        },
            [getAllAntrenorHoca.fulfilled]: (state, action) => {
                return [...action.payload];
        },
            [getByIdAntrenorHoca.fulfilled]: (state, action) => {
                return [...action.payload]
        },
            [getAllPublishedAntrenorHoca.fulfilled]: (state, action) => {
                return [...action.payload]
        },
}});

const { reducer } = antrenorHocaSlice;
export default reducer;
