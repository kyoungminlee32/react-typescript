import { createContext, useState } from 'react';

type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

type TodoListContextValueType = {
  state: {
    todoList: TodoListItemType[];
  };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

const TodoContext = createContext<TodoListContextValueType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([
    { no: 1, todo: '영상 올리기', done: false },
    { no: 2, todo: '점심 먹기', done: false },
    { no: 3, todo: '코딩하기', done: false },
    { no: 4, todo: '운동하기', done: false },
  ]);
  const addTodo = (todo: string) => {
    const newTodo = { no: new Date().getTime(), todo: todo, done: false };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (no: number) => {
    const updatedTodoList = todoList.filter((item) => item.no !== no);
    setTodoList(updatedTodoList);
  };

  const toggleDone = (no: number) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.no === no) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };

  const value: TodoListContextValueType = {
    state: {
      todoList,
    },
    actions: {
      addTodo,
      deleteTodo,
      toggleDone,
    },
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
