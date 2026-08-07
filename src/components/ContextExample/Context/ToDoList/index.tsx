import { useContext } from 'react';
import styled from '@emotion/styled';
import { TodoContext } from '../index';
import { TodoItem } from '../ToDoItem';

const UL = styled.ul`
  display: inline-flex;
  flex-direction: column;
  list-style: mumber;
`;

const TodoList = () => {
  const value = useContext(TodoContext);
  return (
    <UL>
      {value?.state.todoList.map((todo) => (
        <TodoItem todos={todo} key={todo.no} />
      ))}
    </UL>
  );
};

export { TodoList };
