import createRequestActionTypes from 'hooks/createRequestActionTypes';
import { finishLoading, startLoading } from './loading';
import { postsReadList } from 'api/posts';
import { handleActions } from 'redux-actions';

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
  createRequestActionTypes('posts/LIST_POSTS');

export const listPostThunk =
  ({ page, username, tag }) =>
  async (dispatch) => {
    dispatch(startLoading(LIST_POSTS));
    try {
      const res = await postsReadList({ page, username, tag });
      dispatch({ type: LIST_POSTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.error(error);
      dispatch({ type: LIST_POSTS_FAILURE, payload: error, error: true });
    }
    dispatch(finishLoading(LIST_POSTS));
  };

const initialState = { posts: null, error: null };

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts: posts,
      error: null,
    }),

    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      posts: null,
      error: error,
    }),
  },
  initialState
);

export default posts;
