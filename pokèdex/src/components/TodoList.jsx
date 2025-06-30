import { useEffect, useState } from "react";
import { apiConfig } from "../config/api"

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(apiConfig.API_URL, { method: "GET" });
            const data = await response.json();
            console.log(data);
            setTodos(data);

        } catch (error) {
            console.error(error.message);
        }
    };

    const toggleCompleted = (id) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    useEffect(() => {
        fetchData()

    }, []);

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed } onChange={() => toggleCompleted(todo.id)}/>
                        {todo.title} 
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList