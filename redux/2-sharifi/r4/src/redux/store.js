import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
