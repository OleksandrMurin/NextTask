import { Task } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      name: "Task1",
      isComplete: false,
      rank: "C",
      type: "education",
      estimatedTime: 180,
      importance: "moderately important",
      urgency: "not urgent",
      difficulty: "moderate",
      severity: "low",
      deadline: "10.11.2025",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
    changeIsDoneStatus: (state, action: PayloadAction<number>) => {
      state.tasks[action.payload].isComplete =
        !state.tasks[action.payload].isComplete;
    },
  },
});

export default taskSlice.reducer;
