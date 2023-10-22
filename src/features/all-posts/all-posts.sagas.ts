import { call, put, select, takeLatest } from 'typed-redux-saga';
import { api } from './api';
import { getAllPosts, getAllPostsSuccess } from './all-post.slice';

export function* allPostsSaga() {
  yield takeLatest(getAllPosts, function* activateHundler({ payload }) {
    try {
      const data = yield* call(api.getAllPosts, payload);

      yield put(getAllPostsSuccess({ data }));
    } catch {
      // yield put(activateFailure());
    }
  });
}
