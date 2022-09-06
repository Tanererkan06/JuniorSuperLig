import { createSlider, updateSlider, deleteSlider, deleteAllSlider, getAllSlider, getByIdSlider, getAllPublishedSlider } from '../actions/slider';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    extraReducers: {
        [createSlider.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateSlider.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteSlider.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllSlider.fulfilled]: (state, action) => {
            return [];
    },
        [getAllSlider.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdSlider.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedSlider.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = sliderSlice;
export default reducer;