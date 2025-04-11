import { createAction, handleActions } from 'redux-actions';

// action type
const INITIALIZE = 'write/INITIALIZE'; // 모든 상태를 초기화
const CHANGE_FIEILD = 'write/CHANGE_FIEILD'; // 선택된 필드 값 업데이트

// action creator
export const initialize = createAction(INITIALIZE); // 모든 상태를 초기화
export const changeField = createAction(CHANGE_FIEILD, ({ key, value }) => ({
  key,
  value,
})); // 선택된 필드 값 업데이트

// initial state
const initialState = {
  title: '', // 제목
  content: '', // 내용
  tags: [], // 태그
};

// reducer
const write = handleActions(
  {
    [INITIALIZE]: () => {
      return { ...initialState };
    },
    [CHANGE_FIEILD]: (state, { payload: { key, value } }) => {
      return {
        ...state,
        [key]: value,
      };
    },
  },
  initialState
);

export default write;
