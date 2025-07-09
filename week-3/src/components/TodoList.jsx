import { Link, useSearchParams} from "react-router-dom";
import { useCallback, useMemo, useRef, useEffect} from "react";
import { useTodos } from "../context/TodoContext";

const TodoList = () => {
    const { todos, loading, error } = useTodos();
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef(null);

    const searchTerm = searchParams.get("search") || "";
    
    const handleSearchInput = useCallback((e) => {
        const value = e.target.value;
        const newParams = new URLSearchParams(searchParams);
    
        if (value) {
            newParams.set("search", value);
        } else {
            newParams.delete("search");
        }
    
        setSearchParams(newParams);
    }, [searchParams, setSearchParams]);
    
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
            <div className="todo-list">
                <input type="text" ref={inputRef} value={searchTerm} onInput={handleSearchInput}
                    placeholder="Search" />
                <ul>
                    {filteredTodos.map((item) => (
                        <li key={item.id}>
                           <Link to={`/todo/${item.id}`}>{item.title}</Link> 
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList