import { useSelector } from "react-redux";

import { chunkTextArray } from "src/utils/chunkTextArray";
import {
  Store,
  Title,
  NavigationList,
  NavigationId,
  ActiveNavigation
} from "./types";

export const setTitleAction = (title: Title) => ({
  type: "SET_TITLE",
  title
});

export const setActiveNavigationAction = (navigationId: NavigationId) => ({
  type: "SET_ACTIVE_NAVIGATION",
  navigationId
});

export const setActiveNavigation = (state, action): Store => {
  const columns = action.navigationId === "text" ? 1 : state.activeColumn;
  return {
    ...state,
    activeNavigation: action.navigationId,
    text: chunkTextArray(state.text, columns)
  };
};

export const useTitle = (): Title => useSelector((state: Store) => state.title);

export const useNavigationList = (): NavigationList =>
  useSelector((state: Store) => state.navigationList);

export const useActiveNavigation = (): ActiveNavigation =>
  useSelector((state: Store) => state.activeNavigation);
