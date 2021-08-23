import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import sampleData from './sample_data';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = () => {
    const initialData = sampleData;
    setTodos(initialData);
  }

  const addTodo = () => {
    const newTitle = document.getElementById("input_val").value;
    const data = {"title": newTitle, "status": "todo"};
    setTodos([...todos, data]);  
  }

  const changeTodoStatus = (id) => {
    const updateTods = todos.map( (todo, index) => {
      if (id === index) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    })
    setTodos(updateTods);
  }

  useEffect( () => {
    console.log("new todo randered");
  }, [todos])

  useEffect( () => {
    setLoading(true);
    setTimeout(function(){ 
      setLoading(false);
      fetchInitialData();
    }, 1000);
  }, [])

  return (
    <>
    <h1>Todo App</h1>

    <div action="">
      <input type="text" id="input_val" name=""/>
      <button onClick={addTodo}>add todo</button>
    </div>

    <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus}/>
    </>
  )
}

export default App;