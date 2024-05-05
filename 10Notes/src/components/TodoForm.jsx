import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" placeholder='Write Todo!' className='w-full border border-black/10 rounded-lg' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg'>Add</button>
    </form>
  )
}

export default TodoForm