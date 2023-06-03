import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
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
