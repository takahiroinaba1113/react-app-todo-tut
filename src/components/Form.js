import React from 'react'
import TodoList from './TodoList';

const Form = (props) => {

    const inputTextHandler = (event) => {
        // check the dev tools to see what you want and access that with 'target.whatever' 
        props.setInputText(event.target.value);
    }

    const submitTodoHandler = (event) => {
        event.preventDefault();
        props.setTodos([...props.todos,
             {text: props.inputText, completed: false, id: Math.random()
            }]);
        props.setInputText("");
    }

    return (
        <form>
            <input value={props.inpuText} type="text" className="todo-input" onChange={inputTextHandler}/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
             <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
             </select>
            </div>
        </form>
        
    );
}

export default Form