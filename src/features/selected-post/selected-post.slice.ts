import { createSlice } from '@reduxjs/toolkit';
import { TypeOfMockie } from '../../mokie.api';
import { useAppSelector } from '../../hooks';
import { SelectResponse, SelectedPostResponse } from './types';
import { TypeOfArray } from '../all-posts/all-post.slice';
import { AllPostsResponse } from '../all-posts/types';

export const SelectedPostSlice = createSlice({
  name: 'name',
  initialState: {
    selectedPost: {},
    isLoading: false,
  },
  reducers: {
    setSelectedPost(state, action) {
      state.isLoading = true;
      state.selectedPost = action.payload;
    },
    setSelectedPostSuccess(state, action) {
      state.isLoading = false;
    },
    setSelectedPostFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: { setSelectedPost, setSelectedPostSuccess, setSelectedPostFailure },
  reducer: SelectedPostReducer,
} = SelectedPostSlice;
