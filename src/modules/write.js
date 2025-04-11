import createRequestActionTypes from 'hooks/createRequestActionTypes';
import { createAction, handleActions } from 'redux-actions';
import { finishLoading, startLoading } from './loading';
import { postsWrite } from 'api/posts';

// action type
const INITIALIZE = 'write/INITIALIZE'; // 모든 상태를 초기화
const CHANGE_FIEILD = 'write/CHANGE_FIEILD'; // 선택된 필드 값 업데이트
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] =
  createRequestActionTypes('write/WRITE_POST'); // 포스트 작성

// action creator
export const initialize = createAction(INITIALIZE); // 모든 상태를 초기화
export const changeField = createAction(CHANGE_FIEILD, ({ key, value }) => ({
  key,
  value,
})); // 선택된 필드 값 업데이트

// thunk function
export const writePostThunk =
  ({ title, body, tags }) =>
  async (dispatch) => {
    dispatch(startLoading(WRITE_POST)); // 로딩 시작
    try {
      const res = await postsWrite({ title, body, tags });
      dispatch({
        type: WRITE_POST_SUCCESS,
        payload: res.data, // 작성된 포스트
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: WRITE_POST_FAILURE,
        payload: error, // 에러
        error: true,
      });
    }
    dispatch(finishLoading(WRITE_POST)); // 로딩 종료
  };

// initial state
const initialState = {
  title: '', // 제목
  body: '', // 내용
  tags: [], // 태그
  post: null, // 작성된 포스트
  postError: null, // 작성된 포스트 에러
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
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => {
      return { ...state, post: post, postError: null };
    },
    [WRITE_POST_FAILURE]: (state, { payload: error }) => {
      return { ...state, post: null, postError: error };
    },
  },
  initialState
);

export default write;
