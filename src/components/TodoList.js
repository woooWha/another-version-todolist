import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos, OnCheckToggle, OnInsertTodo, onChangeSelectedTodo}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => 
                <TodoItem 
                    todo={todo}
                    key={todo.id}
                    OnCheckToggle={OnCheckToggle}
                    OnInsertTodo={OnInsertTodo}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                    >
                </TodoItem>
            )}
        </div>
    )
}

export default TodoList