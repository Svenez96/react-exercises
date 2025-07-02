import { useCallback, useState, useMemo, useRef, useEffect} from "react";
import { useFetch } from "../hooks/useFetch";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);
    
    const handleSearchChange = useCallback((e) => {
        console.log("handleSearchChange triggered");
        setSearchTerm(e.target.value);
    }, []);
    
    const filteredTodos = useMemo(() => {
        if (!data) return [];
        return data.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]);
    
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;
    

    return (
        <>
            <input type="text" ref={inputRef} value={searchTerm} onChange={handleSearchChange}
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