import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
import '../App.css'

const Form = ({setInputText, todos, inputText ,setTodos}) => {
let handleInput = (e) =>{
    // console.log(e.target.value)
    setInputText(e.target.value)
}
const submitHandle = (e) =>{
  e.preventDefault()
  setTodos([
    ...todos, 
    {text: inputText, completed: false, id: Math.random() * 1000 }
  ])
  setInputText("")
}
return (
    <form>
        <input type="text" className="todo-input" value={inputText}  onChange={handleInput}/>
        <button onClick={submitHandle} className="todo-button" type="submit">
          <FaPlusSquare className="pls-btn"/>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  )
}

export default Form