import React, { createContext, useState, useEffect } from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

export const TodoProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (text: string) => {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: text,
      };
      setTodos([...todos, newTodo]);
    };
  
    const deleteTodo = (id: number) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    };
  
    const editTodo = (id: number, newText: string) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text: newText,
          };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };
  