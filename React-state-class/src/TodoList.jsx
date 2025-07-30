import { useState } from "react"
import "./TodoList.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    //function to add a new task
    let addNewTask = () => {
        //this ... means destructing the structure which we need to do to
        // manipulate the list that we created

        setTodos((previousTodos) => {
            return [...previousTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }

    //function to update the list of tasks
    let updatesTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((previousTodos) => previousTodos.filter((todo) => todo.id != id)) ;
    }


    //function to manipulate or replace elements in an array(using map)
    let upperCaseAll = () =>{
        setTodos((previousTodos)=>
            previousTodos.map((todo)=>{
                return{
                    ...todo, task: todo.task.toUpperCase(),
                }
            })
        )
    }

    ///function to uppercase a single task
    let upperCaseOne = (id) => {
        setTodos((previousTodos) =>
            previousTodos.map((todo)=>{
                if(todo.id === id){
                    return {
                        ...todo, task: todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
            })
    )}

    //function to marks as done
    let markAsDone = (id) =>{
        setTodos((previousTodos)=>
            previousTodos.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo, isDone: true,
                    }
                }else{
                    return todo;
                }
            })
        )
    }

    
    return (
        <div>
            <input className="todo" placeholder="Add a new task" value={newTodo} onChange={updatesTodoValue} />
            <button className="todo" onClick={addNewTask}>Add Task</button>

            <br /><br /><br />
            <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecoration:"line-through"}: {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button className="deletetodo" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            {/* <button className="deletetodo" onClick={() => upperCaseOne(todo.id)}>UpperCase It</button> */}
                            <button className="deletetodo" onClick={() => markAsDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
            <button className="deletetodo" onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}