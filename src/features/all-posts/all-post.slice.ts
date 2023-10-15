import { createSlice } from '@reduxjs/toolkit';
import { TypeOfMockie } from '../../mokie.api';
import { AllPostsResponse, AllPostsType } from './types';

export type TypeOfArray = {
  id: number;
  image: string;
  text: string;
  date: string;
  title: string;
  author: number;
};

const allPostSlice = createSlice({
  name: 'allPostSlice',
  initialState: {
    allPost: [] as TypeOfArray[],
    isLoading: false,
  },
  reducers: {
    getAllPosts(state, action: { payload: AllPostsType }) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: { data: AllPostsResponse } }) {
      state.isLoading = false;
      const data = action.payload;
      const allPostsFromApi = data.data.results;
      state.allPost = allPostsFromApi;
    },
    setSelectedPostFailure(state) {
      state.isLoading = false;
    },
  },
});

export const {
  actions: { getAllPosts, getAllPostsSuccess },
  reducer: allPostReducer,
} = allPostSlice;
