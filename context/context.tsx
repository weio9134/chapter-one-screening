import React, { createContext, useState, ReactNode } from 'react';

type TodoProp = {
  id: number,
  title: string,
  details: string,
  checked: boolean
}

type ContextType = {
  todoList: TodoProp[],
  addTodo: (todo: TodoProp) => void,
  removeTodo: (id: number) => void,
  toggleTodo: (id: number) => void
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  // const [todoList, setTodoList] = useState<TodoProp[]>([]);
  const [todoList, setTodoList] = useState<TodoProp[]>([
    {
      id: 1,
      title: "TODO 1",
      details: "TEST 1",
      checked: false
    },
    {
      id: 2,
      title: "TODO 2",
      details: "TEST 2",
      checked: false
    },
    {
      id: 3,
      title: "TODO 3",
      details: "TEST 3",
      checked: false
    }
  ]);

  const addTodo = (todo: TodoProp) => {
    setTodoList((prevTodos) => [...prevTodos, todo]);
  };
  
  const removeTodo = (id: number) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <Context.Provider value={{ todoList, addTodo, removeTodo, toggleTodo }}>
      {children}
    </Context.Provider>
  );
};

export const useTodos = () => {
  const context = React.useContext(Context);
  
  if (context === undefined) throw new Error('useTodos must be used within a TodoProvider');

  return context;
};
