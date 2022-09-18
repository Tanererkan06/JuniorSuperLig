import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gozcuCurrentRoom: null,
}

export const gozcuCurrentRoomSlice = createSlice({
    name: 'gozcuCurrentRoom',
    initialState,
    reducers: {
        setGozcuCurrentRoom: (state, action) => {
            state.gozcuCurrentRoom = action.payload;
        },
    }    
});

const { reducer } = gozcuCurrentRoomSlice;
export const { setGozcuCurrentRoom } = gozcuCurrentRoomSlice.actions;
export default reducer;