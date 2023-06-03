import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  comments: {},
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
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload]: {
            loading: true,
            error: null,
            data: [],
          },
        },
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: {
            loading: false,
            error: null,
            data: action.payload.comments,
          },
        },
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.postId]: {
            loading: false,
            error: action.payload.error,
            data: [],
          },
        },
      };
    default:
      return state;
  }
};

export default reducers;
