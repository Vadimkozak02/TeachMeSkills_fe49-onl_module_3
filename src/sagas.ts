import { all } from 'redux-saga/effects';
import { registerSaga } from './features/auth/registration.sagas';

export function* rootSaga() {
    yield all([
        registerSaga()
    ])
}