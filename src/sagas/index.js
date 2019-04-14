import {
  all,
} from 'redux-saga/effects';

import getProductsSaga from './getProducts';


export default function* rootSaga() {
  yield all([
    ...getProductsSaga,
  ]);
}
