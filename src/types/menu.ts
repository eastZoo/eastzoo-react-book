export interface MenuItem {
  id: number;
  title: string;
  icon?: JSX.Element;
  depth: number;
  path?: string;
  submenu?: MenuItem[];
}
