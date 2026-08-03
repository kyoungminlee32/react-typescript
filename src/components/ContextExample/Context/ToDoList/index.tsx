import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../index';
import { TodoItem } from '../ToDoItem';

const TodoList = () => {
  const value = useContext(TodoContext);
  return (
    <ul>
      {value?.state.todoList.map((todo) => (
        <TodoItem todos={todo} key={todo.no} />
      ))}
    </ul>
  );
};

export { TodoList };
