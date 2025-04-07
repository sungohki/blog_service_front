import { createAction, handleActions } from 'redux-actions';

// action type
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// action creator
export const startLoading = createAction(START_LOADING, (resType) => resType);
export const finishLoading = createAction(FINISH_LOADING, (resType) => resType);

// initial state
const initialState = {};

// reducer
const loading = handleActions(
  {
    [START_LOADING]: (state, { payload: resType }) => ({
      ...state,
      [resType]: true,
    }),
    [FINISH_LOADING]: (state, { payload: resType }) => ({
      ...state,
      [resType]: false,
    }),
  },
  initialState
);

export default loading;
