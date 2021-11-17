import React from 'react';
let TodoListItem = (props) => {
    return (
        <li>{props.todo.title}</li>
    );

}
export default TodoListItem;