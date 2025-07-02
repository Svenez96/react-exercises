import { useState,  useEffect } from 'react';

const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const term = searchTerm.toLowerCase();
        
        const result = todos.filter(todo => 
            todo.title.toLowerCase().includes(term)
        );

        setFilteredTodos(result);
    }, [todos, searchTerm]);

    return filteredTodos;
}
export default useFilteredTodos;