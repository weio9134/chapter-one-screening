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
  const [todoList, setTodoList] = useState<TodoProp[]>([]);

  const addTodo = (todo: TodoProp) => {
    setTodoList((prevTodos) => [...prevTodos, todo]);
  };
  
  const removeTodo = (index: number) => {
    setTodoList((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  const toggleTodo = (index: number) => {
    setTodoList((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index] = { ...newTodos[index], checked: !newTodos[index].checked };
      return newTodos;
    });
  };

  return (
    <Context.Provider value={{ todoList, addTodo, removeTodo, toggleTodo }}>
      {children}
    </Context.Provider>
  );
};

export const useContext = () => {
  const context = React.useContext(Context);
  
  if (context === undefined) throw new Error('useTodos must be used within a TodoProvider');

  return context;
};
