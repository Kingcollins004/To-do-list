import React from 'react';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './components/TodoContext';


const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-sandy-gold text-center">
      <TodoProvider> {/* Wrap TodoApp with TodoProvider */}
        <TodoApp />
      </TodoProvider>
    </div>
  );
};

export default App;

