export type Title = string;

export type NavigationId = "text" | "columns";

export type Navigation = {
  id: NavigationId;
  pageTitle: string;
  linkText: string;
  link: string;
};

export type ActiveNavigation = NavigationId;

export type NavigationList = Navigation[];

export type Column = 1 | 2 | 3;

export type ActiveColumn = Column;

export type Columns = Column[];

export type Text = string;

export interface Store {
  title: Title;
  activeNavigation: ActiveNavigation;
  navigationList: NavigationList;
  activeColumn: ActiveColumn;
  columns: Columns;
  text: Text;
}
