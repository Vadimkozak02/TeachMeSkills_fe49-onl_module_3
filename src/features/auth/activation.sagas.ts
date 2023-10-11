import { call, put, takeEvery, select } from 'typed-redux-saga';
import { api } from './api';
import {
  activate,
  activateFailure,
  activateSuccess,
  setInProgress,
} from './activation.slice';
import { RootState } from '../../store';

export function* activateSaga() {
  yield takeEvery(activate, function* activateHandler({ payload }) {
    const isInProgress = yield* select(
      (state: RootState) => state.activation.isInProgress
    );
    if (isInProgress) return;
    yield put(setInProgress());
    try {
      const data = yield* call(api.activate, payload);
      console.log(data);
      yield put(activateSuccess());
    } catch (error) {
      console.log(error);
      yield put(activateFailure());
    }
  });
}
