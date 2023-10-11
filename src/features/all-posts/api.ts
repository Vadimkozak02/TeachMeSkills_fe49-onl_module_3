import { baseUrl, jsonContentTypeHeaders } from '../../api/constans';
import { request } from '../../api/request';
import { getTokens } from '../../api/tokens';
// import { authorization } from '../auth/authorization.slice';
import { AllPostsResponse, AllPostsType } from './types';

export const api = {
  getAllPosts: (payload: AllPostsType): Promise<AllPostsResponse> => {
    const searchParams = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      searchParams.set(key, value.toString());
    });
    return request(baseUrl + 'blog/posts/?' + searchParams.toString(), {
      method: 'GET',
      headers: {
        ...jsonContentTypeHeaders,
        authorization: 'Bearer ' + getTokens()?.access,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
