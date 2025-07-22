import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk per fare il fetch dei todo
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    if (!response.ok) throw new Error("Errore nel fetch");
    const data = await response.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    completeTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
