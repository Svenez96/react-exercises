import { createContext, useContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const { data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data])

    return (
        <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
            {children}
        </TodoContext.Provider>
      );
}

export const useTodos = () => useContext(TodoContext);