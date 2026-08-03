import React from 'react';
import styled from '@emotion/styled';
import { TodoProvider } from '../../components/ContextExample/Context';
import TodoForm from '../../components/ContextExample/Context/ToDoForm';
import { TodoList } from '../../components/ContextExample/Context/ToDoList';

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Context2 = () => {
  return (
    <TodoListContainer>
      <h1>Context2</h1>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </TodoListContainer>
  );
};

export default Context2;

<style></style>;
