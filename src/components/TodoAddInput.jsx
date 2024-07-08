function TodoAddInput({onKeyDown}){
    return(
        <input onKeyDown={onKeyDown} type="text" className="mb-4 h-10 bg-gray-100 border border-gray-100 outline-none px-2 rounded-md text-sm focus:bg-white focus:border focus:border-blue-500" placeholder="+ Add a new task" />
    )
}
export default TodoAddInput