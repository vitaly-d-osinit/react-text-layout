import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import page from "./page";
import steps from "./steps";

const INITIAL_STATE = {
  page,
  steps
};

export const initializeStore = (initialState = INITIAL_STATE) => {
  const rootReducer = combineReducers(initialState);
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
};
