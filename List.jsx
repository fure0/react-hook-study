
import React from 'react'

const List = ({todos, loading}) => {

    let todoList = <div>loading...</div>
    if(!loading) todoList = todos.map( (todo, index) => <li key={index}>{todo.title}</li>)

    return (
        <ul>
            {todoList}
        </ul>
    )
}

export default List