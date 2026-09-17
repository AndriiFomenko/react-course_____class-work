import { put, delay, all, takeEvery } from 'redux-saga/effects'
import {
  incrementPending,
  incrementFullfilled,
  decrementPending,
  decrementFullfilled,
  incrementAsync,
  decrementAsync
} from '../slices/counterSlice'

function* incrementSaga() {
  yield put(incrementPending())
  yield delay(1000)
  yield put(incrementFullfilled(1))
}

function* decrementSaga() {
  yield put(decrementPending())
  yield delay(1000)
  yield put(decrementFullfilled(1))
}

export default function* counterSagas() {
  yield all([takeEvery(incrementAsync, incrementSaga), takeEvery(decrementAsync, decrementSaga)])
}
