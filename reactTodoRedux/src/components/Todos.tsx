import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";


function Todos() {
    const todos = useSelector((state:any)=>state.todoReducer.todos);
    const [editableTodoId, setEditableTodoId] = useState<string | null>(null);
    const [todoMsg,setTodoMsg]=useState('');
    const dispatch= useDispatch();


  return (
    <>
    <div className="pt-4 font-bold text-2xl">Todos</div>
    <ul className="list-none">
    {todos.map((todo: any) => {
    const isEditing = editableTodoId === todo.id;

    return (
        <li
        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        key={todo.id}
        >
        <input
            type="text"
            className={`text-white border outline-none w-full bg-transparent rounded-lg ${
            isEditing ? "border-black/10 px-2" : "border-transparent"
            } `}
            value={isEditing ? todoMsg : todo.text}
            onChange={(e) => isEditing && setTodoMsg(e.target.value)}
            readOnly={!isEditing}
        />
        <div className="flex gap-x-2">

        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {
            if (isEditing) {
                dispatch(updateTodo({ id: todo.id, text: todoMsg }));
                setEditableTodoId(null);
                setTodoMsg('');
            } else {
                setEditableTodoId(todo.id);
                setTodoMsg(todo.text);
            }
            }}
        >
            {isEditing ? "📁" : "✏️"}
        </button>

        <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
        >
            🗑️
        </button>
        </div>
        </li>
    );

    })}

    </ul>
    </>
  )
}

export default Todos