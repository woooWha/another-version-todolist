import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import './TodoItem.css'

const TodoItem = ({todo}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      {text}
    </div> 
  )
}

export default TodoItem;