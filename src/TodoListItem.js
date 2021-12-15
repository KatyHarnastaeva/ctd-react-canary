import React from 'react';
import './TodoListItem.css';
let TodoListItem = ({todo, onRemoveTodo }) => {

    return (
        <React.Fragment>
            <li>
                <div>
                    <span>{todo.title}</span>
                    <span class="button-span"><button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button></span>
                </div>
            </li>
        </React.Fragment>
    );
}
export default TodoListItem;