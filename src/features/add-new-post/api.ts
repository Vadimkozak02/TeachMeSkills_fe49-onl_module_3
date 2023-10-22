import { request } from '../../api/request';
import { baseUrl, jsonContentTypeHeaders } from '../../api/constans';
import { AddNewPostType } from './types';
import { getTokens } from '../../api/tokens';

export const api = {
  addNewPost: (payload: AddNewPostType): Promise<Response> => {
    const formData = new FormData();
    formData.set('title', payload.title);
    formData.set('text', payload.text);
    Object.entries(payload).forEach(([key, value]) =>
      formData.set(key, typeof value === 'number' ? value.toString() : value)
    );

    return request(baseUrl + 'blog/posts/', {
      method: 'POST',
      body: formData,
      headers: {
        authorization: 'Bearer ' + getTokens()?.access,
      },
    });
  },
};
