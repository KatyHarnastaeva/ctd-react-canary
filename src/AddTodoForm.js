import React from 'react';
import InputWithLabel from './InputWithLabel';
let AddTodoForm = (props) => 
{
    const {onAddTodo} = props;
    const [todoTitle, setTodoTitle] = React.useState('');
    let handleTitleChange = (event) => {
        let newTodoTitle = document.querySelector('input[name=title]').value;
        setTodoTitle(newTodoTitle);
    };


    let handleAddTodo = (event) => {
        event.preventDefault();
        if(todoTitle && todoTitle.length > 0){
            let newTodo = {title: todoTitle, id: Date.now()}
            onAddTodo(newTodo);
        }
        setTodoTitle('');
    };

    return(
        <form onSubmit= {handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>Title:</InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
}
export default AddTodoForm;