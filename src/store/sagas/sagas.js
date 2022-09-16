import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { API_CALL_REQUEST } from '../actions/asyncActions'

// Watcher SAGA
// Listens the API_CALL_REQUEST actions
export function* watcherSaga() {
  // Listens the action and start a worker Saga
  yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// Worker SAGA
// Is called from watcher Saga, does the login and Dispatches an action

export function* workerSaga(action) {
  try {
    const response = yield call(fetchHttp (action.payload.request))
    // We obtain the token response
    const token = response.data.token
    yield put({
      type: action.payload.okAction,
      payload: {
        token: token
      }
    })
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: {
        error: error
      }
    })
  }
}

function fetchHttp(request) {
  return function () {
    return (axios(request))
  }
}
