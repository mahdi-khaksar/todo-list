import {useState} from "react";

function TodosListItems({id,title,status,changeTodoStatus,deleteTodo,editTodo}){
    const [isEditing,setIsEditing] = useState(false);
    const [newTitle,setNewTitle] = useState(title);
    const handleTitleClick = () => {
        setIsEditing(true)
    }
    const handleTitleChange = (todo) => {
        setNewTitle(todo.target.value);
    }
    const handleTitleSave = () => {
        if( newTitle.trim() !== '' ){
            setIsEditing(false);
            editTodo({id,title:newTitle,status});
        }else{
            setNewTitle(title)
        }
    }

    return(
        <div>
            <div className="flex items-center">
                <div className="peer grid grid-cols-[auto_1fr] items-center gap-3 text-sm hover:bg-gray-100 rounded-md px-2 h-10 flex-auto">
                    <input
                        checked={status}
                        onChange={ () => changeTodoStatus({id,title,status})}
                        type="checkbox"
                        className="peer size-4 appearance-none rounded border border-slate-300 accent-indigo-500 checked:appearance-auto"
                    />
                    {isEditing
                        ?
                        (
                            <input
                                type="text"
                                value={newTitle}
                                onChange={handleTitleChange}
                                onBlur={handleTitleSave}
                                onKeyDown={(event) => {
                                    if(event.key === 'Enter'){
                                        handleTitleSave()
                                    }
                                }}
                                className="border-amber-300 outline-none rounded bg-transparent"
                                autoFocus
                            />
                        )
                        :
                        (
                            <span onClick={handleTitleClick} className="select-none text-slate-700 peer-checked:text-slate-400 peer-checked:line-through">
                                {title}
                            </span>
                        )
                    }

                </div>
                <svg onClick={() => deleteTodo({id})} className="size-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>

    )
}
export default TodosListItems