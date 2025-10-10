import { use, useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext';
import AddTodoForm from './components/AddTodoForm';
import TodoItems from './components/TodoItems';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

function App() {
  const [todos,setTodos]= useState<Todo[]>([]);

  const addTodo = (todo:{})=>{
    setTodos((prev:any)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id:number,todo:{})=>{
    setTodos((prev:any)=>prev.map((prevTodo:any)=>(prevTodo.id == id ? todo:prevTodo)))
  }
  const deleteTodo = (id:number)=>{
    setTodos((prev:any)=>prev.filter((prevTodo:any)=>prevTodo.id !== id ))
  }
  const toggleComplete = (id:number)=>{
    setTodos((prev:any)=>prev.map((prevTodo:any)=>
      prevTodo.id === id ? 
      {...prevTodo,
        completed: !prevTodo.completed
      }
         : prevTodo ))
  }

  useEffect(()=>{
    const prevTodos = JSON.parse(localStorage.getItem('todos') as string);
    if(prevTodos && prevTodos.length > 0)
    setTodos(prevTodos);
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(todos);
    
  },[todos])
  return (
    <TodoContextProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
           <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <AddTodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItems todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
