import { useSelector } from "react-redux";
import { createAction } from "@reduxjs/toolkit";

import {
  Store,
  Title,
  NavigationList,
  ActiveNavigation,
  NavigationId
} from "./types";

export type SetTitle = Title;
export const setTitle = createAction<SetTitle>("SET_TITLE");

export type SetActiveNavigation = NavigationId;
export const setActiveNavigation = createAction<SetActiveNavigation>(
  "SET_ACTIVE_NAVIGATION"
);

export const useTitle = (): Title => useSelector((state: Store) => state.title);

export const useNavigationList = (): NavigationList =>
  useSelector((state: Store) => state.navigationList);

export const useActiveNavigation = (): ActiveNavigation =>
  useSelector((state: Store) => state.activeNavigation);
