import { createSlice } from '@reduxjs/toolkit';
import { TypeOfMockie } from '../../mokie.api';
import { AllPostsResponse, AllPostsType } from './types';

type TypeOfArray = {
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
      const data = action.payload;
      const allPostsFromApi = data.data.results;
      state.allPost = allPostsFromApi;
    },
  },
});

export const {
  actions: { getAllPosts, getAllPostsSuccess },
  reducer: allPostReducer,
} = allPostSlice;
