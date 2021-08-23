
import React from 'react'
import './List.css';

const List = ({todos, loading, changeTodoStatus}) => {

    const updateStatus = (index) => {
        changeTodoStatus(index);
    }

    let todoList = <div>loading...</div>
    if(!loading) todoList = todos.map( (todo, index) => 
        <li key={index} ><span className={todo.status} onClick={ () => updateStatus(index)}>{todo.title}</span></li>
    )

    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List