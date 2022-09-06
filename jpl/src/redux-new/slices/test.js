import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createTest, getAllTest, updateTest, deleteTest, deleteAllTest, getByIdTest } from "../actions/test";
const initialState = [];

const testSlice = createSlice({
    name: "test",
    initialState,
    extraReducers: {
      [createTest.fulfilled]: (state, action) => {
        state.push(action.payload);
      },
      [getAllTest.fulfilled]: (state, action) => {
        return [...action.payload];
      },
      [updateTest.fulfilled]: (state, action) => {
        const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      },
      [deleteTest.fulfilled]: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
      [deleteAllTest.fulfilled]: (state, action) => {
        return [];
      },
      [getByIdTest.fulfilled]: (state, action) => {
        return [...action.payload];
      },
    },
  });
  
  const { reducer } = testSlice;
  export default reducer;