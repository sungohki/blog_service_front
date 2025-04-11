import createRequestActionTypes from 'hooks/createRequestActionTypes';
import { createAction, handleActions } from 'redux-actions';
import { finishLoading, startLoading } from './loading';
import { postsReadOne } from 'api/posts';

// action type
const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes('post/READ_POST'); // 포스트 읽기
const UNLOAD_POST = 'post/UNLOAD_POST'; // 포스트 언로드

// action creator
export const unloadPost = createAction(UNLOAD_POST); // 포스트 언로드

// thunk function
export const readPostOneThunk = (id) => async (dispatch) => {
  dispatch(startLoading(READ_POST)); // 포스트 읽기 시작
  try {
    const res = await postsReadOne(id);
    dispatch({
      type: READ_POST_SUCCESS,
      payload: res.data, // 읽은 포스트
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: READ_POST_FAILURE,
      payload: error,
      error: true,
    });
  }
  dispatch(finishLoading(READ_POST)); // 로딩 종료
};

// initial state
const initialState = {
  post: null,
  postError: null, // 포스트 읽기 에러
};

// reducer
const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: post,
      postError: null,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      post: null,
      postError: error,
    }),
    [UNLOAD_POST]: () => ({
      ...initialState,
    }),
  },
  initialState
);

export default post;
