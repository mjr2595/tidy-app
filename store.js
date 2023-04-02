import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./features/todoList/todoListSlice";

export const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});
