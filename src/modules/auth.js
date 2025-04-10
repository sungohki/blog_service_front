import createRequestActionTypes from 'hooks/createRequestActionTypes';
import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';
import { finishLoading, startLoading } from './loading';
import { authLogin, authRegister } from 'api/auth';

// action type
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN'); // 로그인
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER'); // 회원가입

// action creator
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const loginThunk = (username, password) => async (dispatch) => {
  dispatch(startLoading(LOGIN)); // 로딩 시작
  try {
    const res = await authLogin(username, password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_FAILURE, payload: error, error: true });
  }
  dispatch(finishLoading(LOGIN)); // 로딩 끝
};
export const registerThunk =
  (username, password, passwordConfirm) => async (dispatch) => {
    dispatch(startLoading(REGISTER)); // 로딩 시작
    try {
      const res = await authRegister(username, password, passwordConfirm);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: REGISTER_FAILURE, payload: error, error: true });
    }
    dispatch(finishLoading(REGISTER)); // 로딩 끝
  };

// initial state
const initialState = {
  login: {
    username: '',
    password: '',
  },
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  auth: null,
  authError: null,
};

// reducer
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => {
      return produce(state, (draft) => {
        draft[form][key] = value;
      });
    },
    [INITIALIZE_FORM]: (state, { payload: form }) => {
      return {
        ...state,
        [form]: initialState[form],
        authError: null,
      };
    },
    [LOGIN_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        auth: auth,
        authError: null,
      };
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        auth: null,
        authError: error,
      };
    },
    [REGISTER_SUCCESS]: (state, { payload: auth }) => {
      return {
        ...state,
        auth: auth,
        authError: null,
      };
    },
    [REGISTER_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        auth: null,
        authError: error,
      };
    },
  },
  initialState
);

export default auth;
