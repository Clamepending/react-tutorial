import React from 'react'
import { useTodo } from '../contexts'
import { useState } from 'react'


function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)

    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

  return (
    <div className={`flex border border-black/10 rounded-lg px-3 duration-300 ${todo.completed ? "bg-[#c6e9a7]": "bg-[#ccbed7]"}`}>
        <input type="checkbox" className='cursor-pointer' checked={todo.completed} onChange={toggleCompleted}/>
        <input type='text' value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} readOnly={!isTodoEditable} className='w-full border-none bg-transparent' />
        <button className=" inline-flex w-8 h-8  rounded-lg" onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) {
                editTodo()
            }else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}>{isTodoEditable ? "Save" : "Edit"}</button>
        <button className='ml-2' onClick={() => deleteTodo(todo.id)}>Delete</button>

    </div>
  )
}

export default TodoItem