import { takeLatest, takeEvery, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  LOAD_USERS, SET_USERS,
  loadUsers, setUsers,
} from './';

function * watchSetUsers() {
  yield takeEvery(SET_USERS, setUsersSaga)
}


function * setUsersSaga(action) {
  console.log('do somth');
  return null;
}

export default [
  watchSetUsers
];