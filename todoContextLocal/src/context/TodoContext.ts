import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'',
            completed:false,
        }
    ],
    addTodo:(_todo: any)=>{},
    deleteTodo:(_id:any)=>{},
    updateTodo:(_id:any,_todo:{})=>{},
    toggleComplete: (_id:any) => {}
});
//When you rename it to _id, TypeScript and ESLint treat that as a special naming convention meaning:
//“Yes, I know this parameter isn’t used — and that’s intentional.”

export const TodoContextProvider = TodoContext.Provider;

export function useTodoContext(){
    return useContext(TodoContext);
}