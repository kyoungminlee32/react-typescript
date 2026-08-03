import styled from '@emotion/styled';
import { useContext } from 'react';
import { TodoContext } from '../index';

const Li = styled.li``;

interface TextSpanProps {
  readonly done: boolean;
}
const TextSpan = styled.span<TextSpanProps>`
  color: ${(props) => (props.done ? '#999' : 'inherit')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'inherit')};
  cursor: ${(props) => (props.done ? 'inherit' : 'pointer')};
`;
const RemoveSpan = styled.span`
  color: red;
  margin-left: 10px;
  cursor: pointer;
}`;
interface TodoItemProps {
  todos: {
    no: number;
    todo: string;
    done: boolean;
  };
}

const TodoItem = ({ todos }: TodoItemProps) => {
  const value = useContext(TodoContext);
  const deleteTodo = (no: number) => {
    value?.actions.deleteTodo(no);
  };
  const toggleDone = (no: number) => {
    value?.actions.toggleDone(no);
  };
  return (
    <Li>
      <TextSpan done={todos.done} onClick={() => toggleDone(todos.no)}>
        {todos.todo}
      </TextSpan>
      <RemoveSpan onClick={() => deleteTodo(todos.no)}>(x)</RemoveSpan>
    </Li>
  );
};

export { TodoItem };
