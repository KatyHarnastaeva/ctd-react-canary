import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
function App() {
  return (
    <div>
      <header>
       <h1 style={{ textAlign: 'center' }} >Todo List</h1>
       <AddTodoForm/>
       <TodoList/>
      </header>
      
    </div>
  );
}

export default App;
