import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      console.log("FETCH_POSTS_SUCCESS action dispatched");
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
