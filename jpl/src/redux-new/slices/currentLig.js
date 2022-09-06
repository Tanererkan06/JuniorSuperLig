import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLig: null,
}

export const currentLigSlice = createSlice({
    name: 'currentLig',
    initialState,
    reducers: {
        setCurrentLig: (state, action) => {
            state.currentLig = action.payload;
        },
        getCurrentLig: (state) => {
            return state.currentLig;
        },
    }    
});

const { reducer } = currentLigSlice;
export const { setCurrentLig, getCurrentLig } = currentLigSlice.actions;
export default reducer;