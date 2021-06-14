import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoItem 
                    todo={todo}
                    key={todo.id}>
                </TodoItem>
            ))}
        </div>
    )
}

export default TodoList