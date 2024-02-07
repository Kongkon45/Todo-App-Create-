import React, { useState } from 'react'
import Todos from '../Todos';
import New_Todo from './New_Todo';

const dummyTodo = ['item1', 'item2'];
const Home = () => {
    const [todos, setTodos] = useState(dummyTodo)
    // console.log(todos)
    const onTodo = (todoItem)=>{
        setTodos([...todos, todoItem])
    }
  return (
    <div className='text-center'>
        {/* <h1>Todo App</h1> */}
        <New_Todo handleTodo ={onTodo}/>
        <Todos todos={todos}/>
    </div>
  )
}

export default Home