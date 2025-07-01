export const useFilteredTodos = (todos, searchTerm) => {
    return todos.filter(todo => 
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default useFilteredTodos;