import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Container = styled.div``;
const Title = styled.h3`
  text-align: left;
  margin-top: 0;
`;
const TodoItem = styled.li`
  text-align: left;
  margin-top: 0;
`;

interface TodoProps {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;
}

export const TodoListElement = () => {
  const [todos, setTodos] = useState<readonly TodoProps[]>([]);

  useEffect(() => {
    axios
      .get<TodoProps[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTodos(response.data.slice(0, 10)); // 상위 10개만 가져오기
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Title>Toto List</Title>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <input
              type='checkbox'
              id={String(todo.id)}
              defaultChecked={todo.completed}
            />
            <label htmlFor={String(todo.id)}>{todo.title}</label>
          </TodoItem>
        ))}
      </ul>
    </Container>
  );
};

// export default TodoListElement;
