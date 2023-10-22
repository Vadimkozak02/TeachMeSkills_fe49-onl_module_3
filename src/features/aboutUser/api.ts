import { baseUrl } from '../../api/constans';
import { request } from '../../api/request';
import { getTokens } from '../../api/tokens';
import { aboutUserResponse } from './types';

export const api = {
  aboutUserInfo: (): Promise<aboutUserResponse> => {
    return request(baseUrl + 'auth/users/me/', {
      method: 'GET',
      headers: {
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
