import { baseUrl, jsonContentTypeHeaders } from '../../api/constans';
import { request } from '../../api/request';
import { getTokens } from '../../api/tokens';
import { useAppSelector } from '../../hooks';
import { TypeOfArray } from '../all-posts/all-post.slice';
import { AllPostsResponse } from '../all-posts/types';
import {
  SelectResponse,
  SelectedPostResponse,
  SelectedPostType,
} from './types';

export const api = {
  getSelectedPosts: (payload: number): Promise<SelectResponse> => {
    const id = payload;
    console.log('id', id);
    return request(`${baseUrl}blog/posts/${payload}`, {
      method: 'GET',
      headers: {
        ...jsonContentTypeHeaders,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
