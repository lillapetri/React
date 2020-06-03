import React from 'react'

export default function Todo(props) {
    const {todo} = props;
    return (
        <div>
            <li>{todo.task}</li>
        </div>
    )
}
