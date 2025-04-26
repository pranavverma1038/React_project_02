import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "to do message",
            complete:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

//creating a custom hook
export const useTodo=()=>{
    return useContext(TodoContext)
}
// provider wraps the part of the app that needs to be accessed
export const TodoProvider= TodoContext.Provider