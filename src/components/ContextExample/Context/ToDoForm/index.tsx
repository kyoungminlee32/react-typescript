import { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../index';

const TodoForm = () => {
  const [text, setText] = useState('');
  const value = useContext(TodoContext);

  const onSubmithandle = (e: React.FormEvent) => {
    value?.actions.addTodo(text);
    e.preventDefault();
    setText('');
  };
  return (
    <div>
      <form onSubmit={onSubmithandle}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>리스트 추가</button>
        <p>{text}</p>
      </form>
    </div>
  );
};

export default TodoForm;
