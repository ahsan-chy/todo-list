import React from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  let [inputText, setInputText] = useState([]);
  let [todos, setTodos] = useState([]);
  return (
    <div className="mt-5">
      <header>
        <h1>First Todo List App</h1>
      </header>

      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList setTodos={setTodos} todos={todos}/>
      {<h2>{inputText}</h2>}
    </div>
  );
}

export default App;
