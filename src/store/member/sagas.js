import { takeEvery, takeLatest, put, call, spawn } from 'redux-saga/effects';

import actions from './actions';
import * as service from './serviceApi';
import {message} from '../../helpers/utility';

export function* joinSaga(action) {
  try {
    yield call(service.join, action.joinInfo);
    message('success', '회원정보가 등록되었습니다.');
  } catch (error) {
    console.log(error);
  }
}

export function* fetchListSaga() {
  try {
    const response = yield call(service.fetchList);
    yield put(actions.fetchListSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSaga(action) {
  try {
    const response = yield call(service.fetch, action.id);
    yield put(actions.fetchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* modifySaga(action) {
  try {
    yield call(service.modify, action.form);
    message('success', '회원정보가 수정되었습니다.');
    yield fetchListSaga();
  } catch (error) {
    console.log(error);
  }
}

export function* removeSaga(action) {
  try {
    yield call(service.remove, action.id);
    message('success', '회원정보가 삭제되었습니다.');
    yield fetchListSaga();
  } catch (error) {
    console.log(error);
  }
}

export function* watchSaga() {
  yield takeLatest(actions.JOIN, joinSaga);
  yield takeEvery(actions.FETCH_LIST, fetchListSaga);
  yield takeEvery(actions.FETCH, fetchSaga);
  yield takeEvery(actions.MODIFY, modifySaga);
  yield takeLatest(actions.REMOVE, removeSaga);
}

export default function* rootSaga() {
  yield spawn(watchSaga);
}
