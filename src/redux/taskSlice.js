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
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.list.findIndex(task => task.id === id);
      if (index !== -1) state.list[index] = { ...state.list[index], ...updatedTask };
    },
    markAsCompleted: (state, action) => {
      const index = state.list.findIndex(task => task.id === action.payload);
      if (index !== -1) state.list[index].status = "Completed";
    }
  },
});

export const { addTask, removeTask, editTask, markAsCompleted } = taskSlice.actions;
export default taskSlice.reducer;


