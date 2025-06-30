import { useFetch } from "../hooks/useFetch";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
    const { data, loading, error } = useFetch(API_URL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

    return (
        <>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList