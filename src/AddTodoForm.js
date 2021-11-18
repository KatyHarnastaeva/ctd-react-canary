import React from 'react';
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
        let newTodo = {title: todoTitle, id: Date.now()}
        onAddTodo(newTodo);
        setTodoTitle('');
    };



    return(
        <form onSubmit= {handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" value = {todoTitle} name = "title" onChange = {handleTitleChange}/>
            <button type="submit">Add</button>
        </form>
    );
}
export default AddTodoForm;