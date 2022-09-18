import { createContact, updateContact, deleteContact, deleteAllContact, getAllContact, getByIdContact, getAllPublishedContact } from '../actions/contact';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: {
        [createContact.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateContact.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteContact.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllContact.fulfilled]: (state, action) => {
            return [];
    },
        [getAllContact.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getByIdContact.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedContact.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = contactSlice;
export default reducer;