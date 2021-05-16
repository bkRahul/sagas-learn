import { delay, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { incrementFromSaga } from "./app.actions";

export function* onIncrement() {
  yield console.log("I am incremented");
  yield delay(3000);
  yield put(incrementFromSaga());
}

export function* incrementSaga() {
  yield takeLatest("INCREMENT_START", onIncrement);
}

// export function* incrementSaga() {
//   yield take("INCREMENT_START");
//   yield console.log("I am incremented");
// }

// export function* incrementSaga() {
//   while (true) {
//     yield take("INCREMENT_START");
//     yield console.log("I am incremented");
//     yield delay(3000);
//   }
// }
