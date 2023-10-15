import { configureStore } from '@reduxjs/toolkit';
import { signUpFormSliceReducer } from './features/sign-up-form/sign-up-form.slice';
import { likeDislikeReducer } from './features/like-dislike/like-dislike.slice';
import { TabsSliceReducer } from './features/tabs/tabs.slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { headerMenuReducer } from './features/header-menu/header-menu.slice';
import { previewPopUpReducer } from './features/preview-pop-up/preview-pop-up.slice';
import { FavoriteCardsReducer } from './ui/cards/favorite-card/favorite-card.slice';
import { ActiveBookmarkSliceReducer } from './features/activeBookmark/ActiveBookmark.slice';
import { registrationReducer } from './features/auth/registration.slice';
import { activationReducer } from './features/auth/activation.slice';
import { authorizationReducer } from './features/auth/authorization.slice';
import { allPostReducer } from './features/all-posts/all-post.slice';
import { AddNewPostReducer } from './features/add-new-post/add-new-post.slice';
import { SelectedPostReducer } from './features/selected-post/selected-post.slice';
// import { IsFavoriteReducer } from './features/activeBookmark/isFavorite.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    activeBookmark: ActiveBookmarkSliceReducer,
    activation: activationReducer,
    addNewPost: AddNewPostReducer,
    authorization: authorizationReducer,
    allPost: allPostReducer,
    favoritesCard: FavoriteCardsReducer,
    headerMenu: headerMenuReducer,
    likeDislike: likeDislikeReducer,
    previewPopUp: previewPopUpReducer,
    registration: registrationReducer,
    selectedPost: SelectedPostReducer,
    signUpForm: signUpFormSliceReducer,
    tabs: TabsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
