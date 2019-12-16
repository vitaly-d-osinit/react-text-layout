import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Store } from "./types";
import { setText, setActiveColumn } from "./text-layout";
import { setActiveNavigation } from "./page";

export * from "./page";
export * from "./text-layout";

export const INITIAL_STATE: Store = {
  title: "React coding task «Text Layout»",
  navigationList: [
    {
      id: "text",
      pageTitle: "Text area",
      linkText: "Text",
      href: `/`,
      as: `${process.env.ASSET_PREFIX}/`
    },
    {
      id: "columns",
      pageTitle: "Text columns area",
      linkText: "LAYOUT",
      href: `/layout`,
      as: `${process.env.ASSET_PREFIX}/layout`
    }
  ],
  activeNavigation: "text",
  text: [],
  columns: 3,
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
      return setActiveNavigation(state, action);
    case "SET_TEXT":
      return setText(state, action);
    case "SET_ACTIVE_COLUMN":
      return setActiveColumn(state, action);
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
