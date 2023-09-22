import { takeLatest } from "redux-saga/effects";
import { register } from "./registration.slice";

export function* registerSaga() {
    yield takeLatest(register, function* ({payload}) {
        console.log('registration', payload);
    });
}