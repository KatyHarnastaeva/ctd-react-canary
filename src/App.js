import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
function App() {
  const [todoList, setTodoList] = React.useState([]);

  let addTodo = (newTodo) => {
    console.log(newTodo.title);
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <header>
       <h1 style={{ textAlign: 'center' }} >Todo List</h1>
       <AddTodoForm onAddTodo={addTodo}/>
       <TodoList todoList = {todoList}/>
      </header>
      
    </div>
  );
}


export default App;
