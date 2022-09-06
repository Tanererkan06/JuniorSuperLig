import { createNews, updateNews, deleteNews, deleteAllNews, getAllNews, getByIdNews, getAllPublishedNews } from '../actions/news';
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: {
        [createNews.fulfilled]: (state, action) => {
            state.push(action.payload);
    },
        [updateNews.fulfilled]: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload
        }
    },
        [deleteNews.fulfilled]: (state, action) => {
            let index = state.findIndex(({ id }) => id === action.payload.id);
            if(index !== -1) {
                state.splice(index, 1);
            }        
    },
        [deleteAllNews.fulfilled]: (state, action) => {
            return [];
    },
        [getAllNews.fulfilled]: (state, action) => {
            return [...action.payload]
    },
        [getByIdNews.fulfilled]: (state, action) => {
            return [...action.payload];
    },
        [getAllPublishedNews.fulfilled]: (state, action) => {
            return [...action.payload]
    },
}});

const { reducer } = newsSlice;
export default reducer;