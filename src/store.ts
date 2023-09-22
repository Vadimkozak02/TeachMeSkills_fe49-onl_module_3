import { configureStore } from '@reduxjs/toolkit';
import { signUpFormSliceReducer } from './features/sign-up-form/sign-up-form.slice';
import { likeDislikeReducer } from './features/like-dislike/like-dislike.slice';
import { TabsSliceReducer } from './features/tabs/tabs.slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    likeDislike: likeDislikeReducer,
    signUpForm: signUpFormSliceReducer,
    tabs: TabsSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;