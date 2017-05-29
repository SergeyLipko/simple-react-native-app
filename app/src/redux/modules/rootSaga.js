import { fork } from 'redux-saga/effects';
import users from './users/saga';

const forkEm = saga => fork(saga);

export default function * rootSaga(){
  yield [
    ...users,
  ].map(forkEm)
}