import { createAction, handleActions } from 'redux-actions';
import { finishLoading, startLoading } from './loading';
import { authCheck } from 'api/auth';

const {
  default: createRequestActionTypes,
} = require('hooks/createRequestActionTypes');

// action type
const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 사용자 임시 설정
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes('user/CHECK'); // 사용자 정보 확인`

// action creator
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user); // 사용자 임시 설정
export const check = createAction(CHECK); // 사용자 정보 확인

export const checkThunk = () => async (dispatch) => {
  dispatch(startLoading(CHECK));
  try {
    const res = await authCheck(); // 사용자 정보 확인 API 호출
    dispatch({ type: CHECK_SUCCESS, payload: res.data }); // 사용자 정보 확인 성공
  } catch (error) {
    console.error('사용자 정보 확인 실패', error);
    dispatch(finishLoading(CHECK));
    return dispatch({ type: CHECK_FAILURE, error: true }); // 사용자 정보 확인 성공
  }
  dispatch(finishLoading(CHECK));
};

// initial state
const initialState = {
  user: null, // 사용자 정보
  checkError: null, // 사용자 정보 확인 에러
};

// reducer
const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState
);

export default user;
