import React from 'react';
import Hello from '../../Hello';
import StateComponent1 from '../../example/StateComponent1';
import StateComponent2 from '../../example/StateComponent2';
import NoneContext from '../../example/Context/NoneContext';
import ContextExample from '../../example/Context/Context';
import Context2 from '../../example/Context/Context2';
import Example1 from '../../pages/Example1';

export interface MenuItemType {
  to: string;
  label: string;
  element: React.ReactNode;
}

export const MENU_ITEMS: MenuItemType[] = [
  { to: '/', label: 'Home', element: <Hello name='flature' color='blue' /> },
  {
    to: '/example/StateComponent1',
    label: 'StateComponent1',
    element: <StateComponent1 />,
  },
  {
    to: '/example/StateComponent2',
    label: 'StateComponent2',
    element: <StateComponent2 />,
  },
  {
    to: '/example/Context/NoneContext',
    label: 'NoneContext',
    element: <NoneContext />,
  },
  {
    to: '/example/Context/Context',
    label: 'Context',
    element: <ContextExample />,
  },
  { to: '/example/Context/Context2', label: 'Context2', element: <Context2 /> },
  { to: '/pages/Example1', label: 'Example1', element: <Example1 /> },
];
