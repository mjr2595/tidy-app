import { TASKS } from "../../data/allTasks";

export const selectAllTasks = () => {
  return TASKS;
};

export const selectRandomTask = () => {
  return TASKS[Math.floor(Math.random() * TASKS.length)];
};
