import { useCallback, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = ({todos}) => {
    const { data, loading, error } = useFetch(API_URL);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = useCallback((e) => {
        console.log("handleSearchChange triggered");
        setSearchTerm(e.target.value);
    }, []);



    const filteredTodos = useFilteredTodos(data || [], searchTerm);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

    return (
        <>
            <input type="text" value={searchTerm} onChange={handleSearchChange}
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