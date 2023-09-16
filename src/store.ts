import { configureStore } from '@reduxjs/toolkit';
import { signUpFormSliceReducer } from './features/sign-up-form/sign-up-form.slice';
import { likeDislikeReducer } from './features/like-dislike/like-dislike.slice';

export const store = configureStore({
  reducer: {
    likeDislike: likeDislikeReducer,
    signUpForm: signUpFormSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;