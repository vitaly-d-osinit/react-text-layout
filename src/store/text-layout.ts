import { useSelector } from "react-redux";
import { createAction } from "@reduxjs/toolkit";

import { Store, Columns, Text, ActiveColumn } from "./types";

export type SetText = { text: string; columns: Columns };
export const setText = createAction<SetText>("SET_TEXT");

export type SetActiveColumn = ActiveColumn;
export const setActiveColumn = createAction<SetActiveColumn>(
  "SET_ACTIVE_COLUMN"
);

export const useText = (): Text =>
  useSelector((state: Store): Text => state.text);

export const useColumns = (): Columns =>
  useSelector((state: Store): Columns => state.columns);

export const useActiveColumn = (): ActiveColumn =>
  useSelector((state: Store) => state.activeColumn);
