import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest, call } from 'redux-saga/effects';

// 액션 타입
const CHECK_USER = 'user/CHECK_USER';
const CHECK_USER_SUCCESS = 'user/CHECK_USER_SUCCESS';
const CHECK_USER_FAILURE = 'user/CHECK_USER_FAILURE';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리

const LOGOUT = 'user/LOGOUT';

//액션 함수
export const checkUser = createAction(CHECK_USER);

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);

export const logoutUser = createAction(LOGOUT);

// 초기값
const initialState = {
  user: null,
  checkError: null,
};

const checkUserSaga = createRequestSaga(CHECK_USER, authAPI.checkUser);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user'); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log('localStorage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK_USER, checkUserSaga);
  yield takeLatest(CHECK_USER_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);

export default user;
