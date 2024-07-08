import {useEffect, useState} from "react";
import TodosHeader from "./TodosHeader.jsx";
import TodosListItems from "./TodosListItems.jsx";
import TodoAddInput from "./TodoAddInput.jsx";

function Todos(){
    const [todos,setTodos] = useState([]);
    let API = 'http://localhost:3000/todos/';
    useEffect(() => {
        getTodos()
    },[])
    const getTodos = () => {
        fetch(API)
            .then( res => res.json())
            .then( data => setTodos(data) );
    }
    const addNewTodoHandler = (event) => {
        if(event.key === 'Enter' && event.target.value !== ''){
            fetch(API,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: event.target.value,
                    status: false
                })
            }).then(res => {
                if(res.status === 201){
                    getTodos();
                    event.target.value = "";
                }
            })
        }
    }
    const deleteTodoHandler = (todo) => {
        fetch(API + todo.id,{
            method: "DELETE"
        }).then(res => {
            if(res.status === 200){
                getTodos();
            }
        })
    }
    const changeTodoStatusHandler = (todo) => {
        fetch(API + todo.id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...todo,
                status: !todo.status
            })
        }).then(res => {
            if(res.status === 200){
                getTodos();
            }
        })
    }
    const editTodoHandler = (todo) => {
        fetch(API + todo.id,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...todo,
                title: todo.title
            })
        }).then(res => {
            if(res.status === 200){
                getTodos();
            }
        })
    }
    return (
        <div className="container mx-auto px-4 mt-5">
            <div className="flex flex-col">
                <TodosHeader title="Inbox" />
                <TodoAddInput onKeyDown={addNewTodoHandler} />
                {todos.map((todo) => (
                    <TodosListItems
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        status={todo.status}
                        changeTodoStatus={changeTodoStatusHandler}
                        deleteTodo={deleteTodoHandler}
                        editTodo={editTodoHandler}
                    />
                ))}
            </div>
        </div>

    )
}
export default Todos