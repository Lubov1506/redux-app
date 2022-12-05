import * as API from '../api';
import { put } from 'redux-saga/effects';
import {
  createUserSuccessAction,
  createUserErrorAction,
  getUsersSuccessAction,
  getUsersErrorAction
} from '../actions/actionCreators';

export function * createUserSaga (action) {
  try {
    const {
      data: {
        data: { user }
      }
    } = yield API.createUser(action.values);
    yield put(createUserSuccessAction({ user }));
  } catch (error) {
    yield put(createUserErrorAction(error));
  }
}

export function * getUsersSaga (action) {
  try {
    const {
      data: {
        data:  users 
      }
    } = yield API.getUsers(action.payload);
    yield put(getUsersSuccessAction( users ));
  } catch (err) {
    yield put(getUsersErrorAction(err));
  }
}
