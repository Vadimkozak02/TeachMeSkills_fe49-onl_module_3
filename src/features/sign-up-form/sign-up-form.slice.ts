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
        setEmail(state, action: {payload: typeof state['email']}) {
            state.email = action.payload;
        },
        setPassword(state, action: {payload: typeof state['password']}) {
            state.password = action.payload;
        },
        setConfirmPassword(state, action: {payload: typeof state['confirmPassword']}) {
            state.confirmPassword = action.payload;
        }
    },
});

export const {
    actions: {setName, setEmail, setPassword, setConfirmPassword}, 
    reducer: signUpFormSliceReducer, 
} = signUpFormSlice;