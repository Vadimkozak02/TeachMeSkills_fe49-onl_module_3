import { createSlice } from '@reduxjs/toolkit';
import { TypeOfArray } from '../all-posts/all-post.slice';
import { AllPostsResponse } from '../all-posts/types';

export const myPostsSlice = createSlice({
  name: 'myPostsSlice',
  initialState: {
    myPosts: [] as TypeOfArray[],
    isLoading: false,
  },
  reducers: {
    myPosts: (state, action) => {
      state.isLoading = true;
    },
    myPostsSuccess: (
      state,
      action: { payload: { data: AllPostsResponse } }
    ) => {
      state.isLoading = false;
      console.log('action', action.payload);
      // state.myPosts = action.payload;
    },
    myPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  actions: { myPosts, myPostsSuccess, myPostsFailure },
  reducer: myPostsReducer,
} = myPostsSlice;
