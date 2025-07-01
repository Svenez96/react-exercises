import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = ({todos}) => {
    const { data, loading, error } = useFetch(API_URL);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTodos = useFilteredTodos(data || [], searchTerm);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

    return (
        <>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search" />
            <ul>
                {filteredTodos.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            
        </>
    )
}

export default TodoList