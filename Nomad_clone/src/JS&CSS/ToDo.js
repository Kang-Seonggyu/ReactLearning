import { useState, useEffect } from "react";

function Todolist () {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const onChange = (event) =>  setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        setTodolist((currentArray) => [todo, ...currentArray]);
        setTodo("");
    }
    
    return (
        <div>
            <h1>To Do List({todolist.length})</h1>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={todo}
                    type="text"
                    placeholder="Write your to do..."
                />
                <button>Add</button>
            </form>
            <hr />
            <ul>
                {todolist.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default Todolist;