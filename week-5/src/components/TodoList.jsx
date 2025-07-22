import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, completeTodo } from "../store/slices/todoSlice";

const TodoList = () => {
  const { list, loading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <ul>
      {list.map((todo) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.title}
          <button onClick={() => dispatch(completeTodo(todo.id))}>
            {todo.completed ? "Undo" : "Done"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


