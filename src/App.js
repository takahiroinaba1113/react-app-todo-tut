import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // stateName and setState name
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
     <header>
       <h1>Taka's Todo List</h1>
     </header>
       <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
       <TodoList />
    </div>
  );
}

export default App;
