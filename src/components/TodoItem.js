import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import './TodoItem.css'

const TodoItem = ({todo, OnCheckToggle, OnInsertTodo, onChangeSelectedTodo}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? <MdCheckBox onClick={() => {
              OnCheckToggle(id);
            }} /> : <MdCheckBoxOutlineBlank onClick={() => {
              OnCheckToggle(id);
            }} />}
        <div className="text" onClick={() => {
          onChangeSelectedTodo(todo);
          OnInsertTodo();}}>
          {text}
        </div>
      </div>
    </div> 
  )
}

export default TodoItem;