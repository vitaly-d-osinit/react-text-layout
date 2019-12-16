import { useSelector } from "react-redux";

import { Store, Columns, Text, ActiveColumn } from "./types";

export const setTextAction = (text: string, column: Columns) => ({
  type: "SET_TEXT",
  text,
  column
});

export const setText = (state: Store, action): Store => {
  const newText = new Array(state.columns).fill("");
  return {
    ...state,
    text: newText.map((text, column) =>
      column === action.column ? action.text : state.text[column] || ""
    )
  };
};

export const setActiveColumnAction = (activeColumn: ActiveColumn) => ({
  type: "SET_ACTIVE_COLUMN",
  activeColumn
});

export const useText = (): Text =>
  useSelector((state: Store): Text => state.text);

export const useColumns = (): Columns =>
  useSelector((state: Store): Columns => state.columns);

export const useActiveColumn = (): ActiveColumn =>
  useSelector((state: Store) => state.activeColumn);
