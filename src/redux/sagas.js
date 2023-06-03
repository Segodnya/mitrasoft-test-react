import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
  FETCH_COMMENTS_REQUEST,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} from "./actions";

function* fetchPosts() {
  try {
    yield new Promise((resolve) => setTimeout(resolve, 500));
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("response data:", response.data);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  console.log("watchFetchPosts saga running");
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}

function* fetchComments(action) {
  try {
    yield new Promise((resolve) => setTimeout(resolve, 500));
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`
    );
    console.log("response data:", response.data);
    yield put(
      fetchCommentsSuccess({ postId: action.payload, comments: response.data })
    );
  } catch (error) {
    yield put(
      fetchCommentsFailure({ postId: action.payload, error: error.message })
    );
  }
}

export function* watchFetchComments() {
  console.log("watchFetchComments saga running");
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments);
}
