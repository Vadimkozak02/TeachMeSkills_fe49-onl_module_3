import { createSlice } from "@reduxjs/toolkit";

const signUpFormSlice = createSlice({
    name: 'signUpForm',
    initialState: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
    reducers: {
        setName(state, action: {payload: typeof state['name']}) {
            state.name = action.payload;
        },
    },
});

export const {
    actions: {setName}, 
    reducer: signUpFormSliceReducer, 
} = signUpFormSlice;