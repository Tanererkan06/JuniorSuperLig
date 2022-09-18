import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSehir: 'Istanbul',
}

export const currentSehirSlice = createSlice({
    name: 'currentSehir',
    initialState,
    reducers: {
        setCurrentSehir: (state, action) => {
            state.currentSehir = action.payload;
        },
        getCurrentSehir: (state) => {
            return state.currentSehir;
        },
    }    
});

const { reducer } = currentSehirSlice;
export const { setCurrentSehir, getCurrentSehir } = currentSehirSlice.actions;
export default reducer;