import React from 'react';
import TodoListItem from './TodoListItem';
const todoList = [{id: 1, title: "Complete assigment"}, 
                {id: 2, title: "Create pull request"},
                {id: 3, title: "Merge pull request"}];
function TodoList() {
  return (
    <div style={{ justifyContent:'center' }}>
      <ul>
        {todoList.map((todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
      </ul>
    </div>
  );
}

export default TodoList;