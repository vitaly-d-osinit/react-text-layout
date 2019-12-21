import { configureStore, createReducer } from "@reduxjs/toolkit";

import { Store, Action } from "./types";
import {
  setText,
  SetText,
  setActiveColumn,
  SetActiveColumn
} from "./text-layout";
import {
  setTitle,
  SetTitle,
  setActiveNavigation,
  SetActiveNavigation
} from "./page";
import { chunkTextArray } from "src/utils/chunkTextArray";

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

const reducer = createReducer<Store>(INITIAL_STATE, {
  [setTitle.type]: (state: Store, { payload }: Action<SetTitle>) => {
    return {
      ...state,
      title: payload
    };
  },
  [setActiveNavigation.type]: (
    state: Store,
    { payload }: Action<SetActiveNavigation>
  ): Store => {
    const columns = payload === "text" ? 1 : state.activeColumn;
    return {
      ...state,
      activeNavigation: payload,
      text: chunkTextArray(state.text, columns)
    };
  },
  [setText.type]: (state: Store, { payload }: Action<SetText>): Store => {
    const newText = new Array(state.columns).fill("");
    return {
      ...state,
      text: newText.map((text, column) =>
        column === payload.columns ? payload.text : state.text[column] || ""
      )
    };
  },
  [setActiveColumn.type]: (
    state: Store,
    { payload }: Action<SetActiveColumn>
  ): Store => ({
    ...state,
    activeColumn: payload,
    text: chunkTextArray(state.text, payload)
  })
});

export const initializeStore = (preloadedState = INITIAL_STATE) => {
  return configureStore({
    reducer,
    preloadedState
  });
};
