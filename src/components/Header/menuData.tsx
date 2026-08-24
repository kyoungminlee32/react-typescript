import React from 'react';
import Hello from '../../Hello';
import StateComponent1 from '../../example/StateComponent1';
import StateComponent2 from '../../example/StateComponent2';
import NoneContext from '../../example/Context/NoneContext';
import ContextExample from '../../example/Context/Context';
import Context2 from '../../example/Context/Context2';
import Example1 from '../../pages/Example1';
import BlogPosts from '../../pages/BlogPosts';
import Photo from '../../pages/Photo';
import { TodoListElement } from '../../pages/TodoLIst';
export interface MenuItemType {
  to: string;
  label: string;
  element: React.ReactNode;
}

const COMMON_MENU_LIST: MenuItemType[] = [
  { to: '/', label: 'Home', element: <Hello name='flature' color='blue' /> },
  {
    to: 'StateComponent1',
    label: 'StateComponent1',
    element: <StateComponent1 />,
  },
  {
    to: 'StateComponent2',
    label: 'StateComponent2',
    element: <StateComponent2 />,
  },
  {
    to: 'NoneContext',
    label: 'NoneContext',
    element: <NoneContext />,
  },
  {
    to: 'Context',
    label: 'Context',
    element: <ContextExample />,
  },
  { to: 'Context2', label: 'Context2', element: <Context2 /> },
  { to: 'Example', label: 'Example1', element: <Example1 /> },
  { to: 'BlogPost', label: 'BlogPost', element: <BlogPosts /> },
  { to: 'Photo', label: 'Photo', element: <Photo /> },
  { to: 'TodoLIst', label: 'TodoLIstLabel', element: <TodoListElement /> },
];

export const MENU_ITEMS: MenuItemType[] = [...COMMON_MENU_LIST];

export const HEADER_MENU_ITEMS: MenuItemType[] = [...COMMON_MENU_LIST];
