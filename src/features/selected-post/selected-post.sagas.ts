import { call, put, takeLatest } from 'typed-redux-saga';
import {
  setSelectedPost,
  setSelectedPostFailure,
  setSelectedPostSuccess,
} from './selected-post.slice';
import { api } from './api';

export function* setSelectedPostSaga() {
  yield takeLatest(
    setSelectedPost,
    function* setSelectedPostHandler({ payload }) {
      const data = yield* call(api.getSelectedPosts, payload);
      if (data) {
        yield put(setSelectedPostSuccess(data));
      } else {
        yield put(setSelectedPostFailure());
      }
    }
  );
}
