import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import page from "./page";
import steps from "./steps";

export const INITIAL_STATE = {
  page,
  steps
};

export const initializeStore = (initialState = INITIAL_STATE) => {
  const rootReducer = combineReducers(INITIAL_STATE);
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
};
