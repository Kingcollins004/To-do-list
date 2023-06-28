import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp: React.FC = () => {
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);

  const handleAddTodo = (text: string) => {
    addTodo(text);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <div className="relative top-14">
      <div className="ml-40% mr-40% mb-4 p-8 bg-dark-gray text-center rounded-xl">
        <h1 className="text-3xl text-white font-bold">To-Do List</h1>
        <p className="text-base text-white">
          Create a list for your activities to stay organized{" "}
        </p>
      </div>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
