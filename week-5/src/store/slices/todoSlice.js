import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    completeTodo: (state, action) => {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    }
  }
});

export const { setTodos, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
