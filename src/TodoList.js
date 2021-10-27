import React from 'react';
const todoList = [{id: 1, title: "Complete assigment"}, 
                {id: 2, title: "Create pull request"},
                {id: 3, title: "Merge pull request"}];
function TodoList() {
  return (
    <div style={{ justifyContent:'center' }}>
      <ul>
        {todoList.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;