import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     language: 'Türkçe',
// }

const initialState = [
    {language: 'tr',},
    {language: 'en'},
]

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        }
    },
})

const { reducer } = languageSlice;
export const { setLanguage } = languageSlice.actions;
export default reducer;