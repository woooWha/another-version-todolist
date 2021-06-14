import React, { useEffect, useState } from 'react';
import './TodoInsert.css';
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";



const TodoInsert = ({OnInsertTodo, onInsertAddTodo, selectedTodo, onRemove, onUpdate}) => {

    const[value, setvalue] = useState('');

    const onChange = e => {
        setvalue(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        onInsertAddTodo(value);
        setvalue("");
        OnInsertTodo();
    };

    useEffect(() => {
        if(selectedTodo) {
            setvalue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
        <div className = "TodoInsert">
            <div className="background" onClick={OnInsertTodo}></div>
            <form onSubmit={onSubmit} className="InsertForm">
                <input placeholder="please type" value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className="rewrite">
                        <TiPencil onClick = { () => {
                            onUpdate(selectedTodo.id,value);
                        }} /><TiTrash onClick ={() => {
                            onRemove(selectedTodo.id);
                        }} />
                    </div>
                ) : (
                <button type="submit"><MdAddCircle /></button>)}
            </form>
        </div>
    )
}

export default TodoInsert;