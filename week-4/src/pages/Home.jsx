import TodoList from "../../../week-3/src/components/TodoList"
import { TodoProvider } from "../../../week-3/src/context/TodoContext"

const Home = () => {
    return (
        <>
        <TodoProvider>
            <h1>Todo List</h1>
            <TodoList />
        </TodoProvider>
        </>
    ) 
}

export default Home