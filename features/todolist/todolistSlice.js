import { createSlice } from "@reduxjs/toolkit";
import allTasks from "../../data/allTasks";

const initialState = {
  todoItems: allTasks,
  timeRemaining: 60,
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    clearList: (state) => {
      state.timeRemaining = 0;
      state.todoItems = [];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.todoItems = state.todoItems.filter((task) => task.UUID !== taskId);
    },
  },
});

export const selectAllTasks = () => {
  return allTasks;
};

export const selectRandomTask = () => {
  return allTasks[Math.floor(Math.random() * allTasks.length)];
};

export const { clearList, removeTask } = todolistSlice.actions;
export default todolistSlice.reducer;
