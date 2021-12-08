import React from 'react';
let TodoListItem = (props) => {
    const {todo} = props;
    return (
        <React.Fragment>
            <li>{todo.title}</li>
        </React.Fragment>
    );
}
export default TodoListItem;