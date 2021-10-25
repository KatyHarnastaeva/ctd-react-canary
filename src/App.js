import React from 'react';
let todoList = [{id: 1, title: "Complete assigment"}, 
                {id: 2, title: "Create pull request"},
                {id: 3, title: "Merge pull request"}];
function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
       <h1>Todo List</h1>
      </header>
      <ul>
        {todoList.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
