import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLanguage: 'tr',
}

export const currentLanguageSlice = createSlice({
    name: 'currentLanguage',
    initialState,
    reducers: {
        setCurrentLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
    }    
});

const { reducer } = currentLanguageSlice;
export const { setCurrentLanguage } = currentLanguageSlice.actions;
export default reducer;