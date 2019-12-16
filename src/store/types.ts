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

export type Columns = number;

export type ActiveColumn = Columns;

export type Text = string[];

export interface Store {
  title: Title;
  activeNavigation: ActiveNavigation;
  navigationList: NavigationList;
  activeColumn: ActiveColumn;
  columns: Columns;
  text: Text;
}
