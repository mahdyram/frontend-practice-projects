import { applyMiddleware, createStore } from "redux";
import apiReducer from "./apiReducer";
import { thunk } from "redux-thunk";

const store = createStore(apiReducer, applyMiddleware(thunk));

export default store;
