import { all } from 'redux-saga/effects';
import { registerSaga } from './features/auth/registration.sagas';
import { activateSaga } from './features/auth/activation.sagas';
import { authorizationSaga } from './features/auth/authorization.sagas';
import { allPostsSaga } from './features/all-posts/all-posts.sagas';
import { addNewPostSaga } from './features/add-new-post/add-new-post.sagas';
import { setSelectedPostSaga } from './features/selected-post/selected-post.sagas';
import { aboutUserSaga } from './features/aboutUser/aboutUser.sagas';
// import { myPostsSaga } from './features/myPosts/my-posts.sagas';

export function* rootSaga() {
  yield all([
    aboutUserSaga(),
    activateSaga(),
    addNewPostSaga(),
    allPostsSaga(),
    authorizationSaga(),
    // myPostsSaga(),
    registerSaga(),
    setSelectedPostSaga(),
  ]);
}
