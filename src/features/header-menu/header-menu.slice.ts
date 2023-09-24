import { createSlice } from "@reduxjs/toolkit";

const headerMenuSlice = createSlice({
    name: 'headerMenu',
    initialState: {
        isOpened: false,
    },
    reducers: {
        setIsOpen(state, action: {payload: typeof state['isOpened']}) {
            state.isOpened = action.payload;
        }
    }
});

export const { actions: {setIsOpen}, reducer: headerMenuReducer } = headerMenuSlice;