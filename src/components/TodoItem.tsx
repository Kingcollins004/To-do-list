import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="flex items-center justify-between border-b border-neutral-50 py-2">
        <span>{todo.id}.</span>
      <span>{todo.text}</span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;

