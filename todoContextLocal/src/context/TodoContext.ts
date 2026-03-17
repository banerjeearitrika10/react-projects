import { createContext, useContext } from "react";

//This creates a Context object.
//It defines the shape of the data that will be shared.
//These are fallback values if a component uses the context without a provider.
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'',
            completed:false,
        }
    ],
    //The underscore means:
    // This parameter is intentionally unused.
    // This avoids TypeScript / ESLint warnings.
    addTodo:(_todo: any)=>{},
    deleteTodo:(_id:any)=>{},
    updateTodo:(_id:any,_todo:{})=>{},
    toggleComplete: (_id:any) => {}
});
//When you rename it to _id, TypeScript and ESLint treat that as a special naming convention meaning:
//“Yes, I know this parameter isn’t used — and that’s intentional.”

export const TodoContextProvider = TodoContext.Provider;


//This is a custom hook wrapper.
//Instead of writing:
//const context = useContext(TodoContext);
//We write:
//const context = useTodoContext();
//Cleaner and reusable.
export function useTodoContext(){
    return useContext(TodoContext);
}