import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const AppSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddNewTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    },
    RemoveItemFromTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    },
    UpdateTodo: (state, action) => {
      const index = state.todos.findIndex((i) => i.id === action.payload.id);
      const updateTodo = [...state.todos];
      if (index >= 0) {
        updateTodo.splice(index, 1, action.payload);
      }
      return {
        ...state,
        todos: updateTodo,
      };
    },
  },
});

export const { AddNewTodo, RemoveItemFromTodo, UpdateTodo } = AppSlice.actions;
export default AppSlice.reducer;
