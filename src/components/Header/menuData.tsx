export interface MenuItemType {
  to: string;
  label: string;
}

export const MENU_ITEMS: MenuItemType[] = [
  { to: '/', label: 'Home' },
  { to: '/example/StateComponent1', label: 'StateComponent1' },
  { to: '/example/StateComponent2', label: 'StateComponent2' },
  { to: '/example/Context/NoneContext', label: 'NoneContext' },
  { to: '/example/Context/Context', label: 'Context' },
  { to: '/example/Context/Context2', label: 'Context2' },
  { to: '/pages/Example1', label: 'Example1' },
];
