import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

export const changeFiled = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form, // login, register
    key, // username, password, passwordConfirm
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = () => (dispatch, state) => {
  // 로딩 ?
  try {
    dispatch({ type: 'auth/REGISTER_SUCCESS' }); // 보낼 데이터 api
  } catch (e) {
    dispatch({ type: 'auth/REGISTER_FAILURE', e });
  }
  // 로딩 끝?
};

const auth = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
