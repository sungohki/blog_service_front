import { produce } from 'immer';
import { createAction, handleActions } from 'redux-actions';

// 액션 상수
const CHANGE_FIELD = 'auth/CHANGE_FIELD'; // 로그인
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // 로그인

// 액션 생성 함수
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

// 초기 상태
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
};

// 리듀서
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
      };
    },
  },
  initialState
);

export default auth;
