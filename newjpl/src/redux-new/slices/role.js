import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    createdAt: null,
    updatedAt: null,
    id: null,
}

export const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        setRole(state, action) {
            state.name = action.payload.name || null;
            state.createdAt = action.payload.createdAt || null;
            state.updatedAt = action.payload.updatedAt || null;
            state.id = action.payload.id || null;
        }
    }
})

const { reducer } = roleSlice;
export const { setRole } = roleSlice.actions;
export default reducer;