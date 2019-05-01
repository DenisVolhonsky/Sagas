// import { put, takeEvery, all } from 'redux-saga/effects';

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// function* helloSaga() {
//   yield console.log('Hello Sagas!');
// }

// export function* incrementAsync() {
//   yield delay(2000);
//   yield put({ type: 'INCREMENT_ASYNC', value: 1 });
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT', incrementAsync);
// }

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

// export default function* rootSaga() {
//   yield all([
//     helloSaga(),
//     watchIncrementAsync()
//   ])
// }


// import { delay } from "redux-saga";
import { takeLatest, put, all } from "redux-saga/effects";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* helloSaga() {
  yield delay(5000)
  yield 2
  yield 3
  yield console.log('Hello Sagas!');
}

function* AsyncInc() {
  yield delay(2000);
  yield put({ type: "ASYNC_INCREMENT", payload: 1 });
}

export function* watchAsync() {
  yield takeLatest("INCREMENT", AsyncInc);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchAsync()
  ])
}
