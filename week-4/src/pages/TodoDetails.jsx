import { useParams, Link } from "react-router-dom"
import { useTodos } from "../../../week-3/src/context/TodoContext";

const TodoDetails = () => {
    const { id } = useParams();
    const { todos } = useTodos();

    const todo = todos.find((t) => t.id.toString() === id);

    if (!todo) return <p>Todo non trovato</p>

    return (
        <>
            <div>
                <h2>Id: {todo.id}</h2>
                <p>Details: {todo.title}</p>
                <Link to="/"> ← Torna alla lista</Link>
            </div>
        </>
    );
};

export default TodoDetails;