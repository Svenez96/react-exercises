import { useCallback, useState, useMemo, useRef, useEffect} from "react";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
    const { todos, loading, error } = useTodos();
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);
    
    const handleSearchChange = useCallback((e) => {
        console.log("handleSearchChange triggered");
        setSearchTerm(e.target.value);
    }, []);
    
    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);
    
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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