import { Link, useSearchParams } from "react-router-dom";
import { useCallback, useMemo, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodos, completeTodo } from "../store/slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  const searchTerm = searchParams.get("search") || "";

  const handleSearchInput = useCallback(
    (e) => {
      const value = e.target.value;
      const newParams = new URLSearchParams(searchParams);

      if (value) {
        newParams.set("search", value);
      } else {
        newParams.delete("search");
      }

      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        const data = await response.json();
        dispatch(setTodos(data));
      } catch (err) {
        console.error("Errore nel fetch:", err);
      }
    };
    fetchTodos();
  }, [dispatch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onInput={handleSearchInput}
        placeholder="Search"
      />
      <ul>
        {filteredTodos.map((item) => (
          <li
            key={item.id}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            <Link to={`/todo/${item.id}`}>{item.title}</Link>
              <button onClick={() => handleComplete(item.id)}>
                {item.completed ? "Undo" : "Done"}
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
