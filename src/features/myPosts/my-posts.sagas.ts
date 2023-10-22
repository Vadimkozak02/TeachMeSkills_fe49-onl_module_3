import { call, put, takeLatest } from 'typed-redux-saga';
import { myPosts, myPostsFailure, myPostsSuccess } from './my-posts.slice';
import { api } from './api';

export function* myPostsSaga() {
  // yield takeLatest(myPosts, function* myPostsHundler({ payload }) {
  //   try {
  //     const data = yield* call(api.myPosts, payload);
  //     yield put(myPostsSuccess({ data }));
  //   } catch {
  //     //   yield put(myPostsFailure());
  //   }
  // });
}
