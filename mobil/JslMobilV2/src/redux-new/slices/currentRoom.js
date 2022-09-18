import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentRoom: null,
}

export const currentRoomSlice = createSlice({
    name: 'currentRoom',
    initialState,
    reducers: {
        setCurrentRoom: (state, action) => {
            state.currentRoom = action.payload;
        },
    }    
});

const { reducer } = currentRoomSlice;
export const { setCurrentRoom } = currentRoomSlice.actions;
export default reducer;