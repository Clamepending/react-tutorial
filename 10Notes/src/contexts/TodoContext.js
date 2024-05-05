import {createContext, useContext} from "react"


export const TodoContext = createContext({
    todos: [
        {id: 1, todo: "Learn React", completed: true},
        {id: 2, todo: "Learn Firebase", completed: false},
        {id: 3, todo: "Learn GraphQL", completed: false},
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider