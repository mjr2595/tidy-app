import { createSlice } from "@reduxjs/toolkit";
import taskBank from "../../data/taskBank";

const initialState = {
  taskBank: taskBank,
  todoList: taskBank,
  availableTime: 0,
};

const todoListSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    clearList: (state) => {
      state.availableTime = 0;
      state.todoList = [];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.todoList = state.todoList.filter((task) => task.UUID !== taskId);
    },
  },
});

export const selectAllTasks = () => {
  return taskBank;
};

export const selectRandomTask = () => {
  return taskBank[Math.floor(Math.random() * taskBank.length)];
};

export const { clearList, removeTask } = todoListSlice.actions;
export default todoListSlice.reducer;
