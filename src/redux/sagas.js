import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "./actions";

function* fetchPosts() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}
