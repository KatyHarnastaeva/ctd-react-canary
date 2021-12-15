import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []);
  
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList)
    )}, [todoList])

  return [todoList, setTodoList];
}
function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  let addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  
  let removeTodo = (id) => {
    console.log(id);
    const newtodoList = todoList.filter((item) => item.id !== id);
        setTodoList([...newtodoList]);
  };
  return (
    <div>
      <header>
       <h1 style={{ textAlign: 'center' }}>Todo List</h1>
       <AddTodoForm onAddTodo = {addTodo}/>
       <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </header>
    </div>
  );
}


export default App;
