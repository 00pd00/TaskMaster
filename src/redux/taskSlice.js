import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], 
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export const filteredTasks = (state) => {
  const { list } = state.task || { list: [] };
  console.log("Task List:", list); 
  return list;
};

export default taskSlice.reducer;
