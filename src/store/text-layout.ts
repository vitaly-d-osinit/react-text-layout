import { useSelector } from "react-redux";

import { Store, Column, Columns, Text, ActiveColumn } from "./types";

export const setText = (text: Text) => ({
  type: "SET_TEXT",
  text
});

export const setActiveColumn = (activeColumn: Column) => ({
  type: "SET_ACTIVE_COLUMN",
  activeColumn
});

export const useText = (): Text =>
  useSelector((state: Store): Text => state.text);

export const useColumns = (): Columns =>
  useSelector((state: Store): Columns => state.columns);

export const useActiveColumn = (): ActiveColumn =>
  useSelector((state: Store) => state.activeColumn);
