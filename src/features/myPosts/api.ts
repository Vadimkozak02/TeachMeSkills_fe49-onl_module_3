import { URLSearchParams } from 'url';
import { AllPostsResponse } from '../all-posts/types';
import { myPostsType } from './types';
import { request } from '../../api/request';
import { baseUrl, jsonContentTypeHeaders } from '../../api/constans';
import { getTokens } from '../../api/tokens';

export const api = {
  // myPosts: (payload: myPostsType): Promise<AllPostsResponse> => {
  //   const searchParams = new URLSearchParams();
  //   Object.entries(payload).forEach(([key, value]) => {
  //     searchParams.set(key, value.toString());
  //   });
  //   return request(
  //     baseUrl + 'blog/posts/my_posts/?' + searchParams.toString(),
  //     {
  //       method: 'GET',
  //       headers: {
  //         ...jsonContentTypeHeaders,
  //         authorization: 'Bearer ' + getTokens()?.access,
  //       },
  //     }
  //   ).then((response) => {
  //     if (!response.ok) {
  //       throw new Error('SERVER_ERROR');
  //     }
  //     return response.json();
  //   });
  // },
};
