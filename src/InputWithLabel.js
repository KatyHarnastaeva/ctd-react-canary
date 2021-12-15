import React from 'react';
let InputWithLabel = ({todoTitle, handleTitleChange, isFocused, children}) => 
{
    const inputRef = React.useRef();
    React.useEffect(() => {
          inputRef.current.focus();
      });
    return(
        <React.Fragment>
            <label htmlFor="todoTitle">{children}</label>
            <input ref={inputRef} id="todoTitle" value = {todoTitle} name = "title" onChange = {handleTitleChange}/>
        </React.Fragment>
    );
}
export default InputWithLabel;