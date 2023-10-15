import { all } from 'redux-saga/effects';
import { registerSaga } from './features/auth/registration.sagas';
import { activateSaga } from './features/auth/activation.sagas';
import { authorizationSaga } from './features/auth/authorization.sagas';
import { allPostsSaga } from './features/all-posts/all-posts.sagas';
import { addNewPostSaga } from './features/add-new-post/add-new-post.sagas';
import { setSelectedPostSaga } from './features/selected-post/selected-post.sagas';

export function* rootSaga() {
  yield all([
    registerSaga(),
    activateSaga(),
    authorizationSaga(),
    allPostsSaga(),
    addNewPostSaga(),
    setSelectedPostSaga(),
  ]);
}
