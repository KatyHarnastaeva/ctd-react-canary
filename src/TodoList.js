import React from 'react';
import TodoListItem from './TodoListItem';
function TodoList(props) {
  return (
    <div style={{ justifyContent:'center' }}>
      <ul>
        {props.todoList.map((todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
      </ul>
    </div>

  );
}

export default TodoList;