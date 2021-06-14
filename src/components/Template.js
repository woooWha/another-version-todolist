import React from 'react';
import './Template.css';

const Template = ({children, todosLength}) => {
    return (
        <div className="Template">
            <h1 className="title">오늘의 할 일({todosLength})</h1>
            {children}
        </div>
    )
}

export default Template;