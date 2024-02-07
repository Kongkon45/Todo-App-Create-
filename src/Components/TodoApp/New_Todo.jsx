import React, { useState } from 'react'

const New_Todo = (props) => {
    const [todo, setTodo] = useState("")
    const handleChange = (e)=>{
        setTodo(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.handleTodo(todo)
        console.log(todo)
    }
  return (
    <div>
        <h1 className='text-center text-4xl my-4 font-bold'>Todo Apps</h1>
        <form className='w-1/4 mx-auto' action="" onSubmit={handleSubmit}>
            <input className='border py-3 pl-2 rounded-lg mr-2' type="text" name="todo" id="todo" onChange={handleChange} value={todo} />
            <button className='bg-blue-400 text-white py-2 px-4 rounded-xl text-2xl'>Add Todo</button>
        </form>
    </div>
  )
}

export default New_Todo