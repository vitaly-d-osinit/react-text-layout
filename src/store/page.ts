import { useSelector } from "react-redux";

import {
  Store,
  Title,
  NavigationList,
  NavigationId,
  ActiveNavigation
} from "./types";

export const setTitle = (title: Title) => ({
  type: "SET_TITLE",
  title
});

export const setActiveNavigation = (navigationId: NavigationId) => ({
  type: "SET_ACTIVE_NAVIGATION",
  navigationId
});

export const useTitle = (): Title => useSelector((state: Store) => state.title);

export const useNavigationList = (): NavigationList =>
  useSelector((state: Store) => state.navigationList);

export const useActiveNavigation = (): ActiveNavigation =>
  useSelector((state: Store) => state.activeNavigation);
