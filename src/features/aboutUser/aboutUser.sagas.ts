import { call, put, takeLatest } from 'typed-redux-saga';
import {
  aboutUserInfo,
  aboutUserInfoFailure,
  aboutUserInfoSuccess,
} from './aboutUser.slice';
import { api } from './api';

export function* aboutUserSaga() {
  yield takeLatest(aboutUserInfo, function* aboutUserHundler({ payload }) {
    try {
      const data = yield* call(api.aboutUserInfo, payload);

      yield put(aboutUserInfoSuccess(data));
    } catch {
      yield put(aboutUserInfoFailure());
    }
  });
}
