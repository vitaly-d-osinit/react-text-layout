import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Store } from "./types";

export * from "./page";
export * from "./text-layout";

export const INITIAL_STATE: Store = {
  title: "React coding task «Text Layout»",
  navigationList: [
    {
      id: "text",
      pageTitle: "Text area",
      linkText: "Text",
      link: "/"
    },
    {
      id: "columns",
      pageTitle: "Text columns area",
      linkText: "Columns",
      link: "/layout"
    }
  ],
  activeNavigation: "text",
  text: "",
  columns: [1, 2, 3],
  activeColumn: 1
};

const reducer = (state = INITIAL_STATE, action): Store => {
  const { type } = action || {};

  switch (type) {
    case "SET_TITLE":
      return {
        ...state,
        title: action.title
      };
    case "SET_ACTIVE_NAVIGATION":
      return {
        ...state,
        activeNavigation: action.navigationId
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "SET_ACTIVE_COLUMN":
      return {
        ...state,
        activeColumn: action.activeColumn
      };
    default:
      return state;
  }
};

export const initializeStore = (preloadedState = INITIAL_STATE) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
};
