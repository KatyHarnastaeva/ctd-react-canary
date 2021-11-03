import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
function App() {
  const [newTodo, setNewTodo] = React.useState(''); 
  return (
    <div>
      <header>
       <h1 style={{ textAlign: 'center' }} >Todo List</h1>
       <AddTodoForm onAddTodo={setNewTodo}/>
       <p>{newTodo}</p>
       <TodoList/>
      </header>
      
    </div>
  );
}

export default App;
