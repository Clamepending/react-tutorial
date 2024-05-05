import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (todo) => {
    // setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)))
    setTodos((prev) => prev.map((t) => {
      if (t.id === todo.id) {
        return todo 
      }else{
        return t
      }
  }))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo => {
        if (prevTodo.id === id) {
          return { ...prevTodo, completed: !prevTodo.completed }
        } else {
          return prevTodo
        }
      })))

  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <TodoForm />
      {
        todos.map((todo) => {
          return <div key={todo.id} className='w-full'>
            <TodoItem todo={todo} />
          </div>
        })
      }

    </TodoProvider>
  )
}

export default App
