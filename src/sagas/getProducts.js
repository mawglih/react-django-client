import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_FAILURE,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from 'actions/constants';
import { API } from 'utils/constants';

export function* getProductsStartSaga() {
  try {
    const {
      data,
      status,
    } = yield call(axios,{
      method: 'get',
      url: URL,
    });
    if (status >= 200 && status < 300) {
      yield console.log('data in axios response presents get: ', data);
      yield put({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } else {
      throw data;
    }
  } catch (error) {
    yield console.log('present saga error: ', error);
    yield put({
      type: GET_FAILURE,
      payload: error,
    });
  }
}

export function* getProductsSaga() {
  yield takeEvery(GET_PRODUCTS_START, getProductsStartSaga);
}

export default [
  getProductsSaga()
];