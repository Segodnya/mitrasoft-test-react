import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { watchFetchPosts, watchFetchComments } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
console.log("store created");

sagaMiddleware.run(watchFetchPosts);
sagaMiddleware.run(watchFetchComments);

export default store;
