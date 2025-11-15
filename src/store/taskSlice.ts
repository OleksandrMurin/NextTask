import { Task } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      name: "Homework for polish",
      isComplete: false,
      rank: "S",
      type: "education",
      estimatedTime: 180,
      importance: 5,
      urgency: 3,
      difficulty: 3,
      severity: "low",
      deadline: "20.11.2025",
      reward: 275,
    },
    {
      id: 2,
      name: "Homework for polish",
      isComplete: false,
      rank: "A",
      type: "education",
      estimatedTime: 180,
      importance: 5,
      urgency: 3,
      difficulty: 4,
      severity: "low",
      deadline: "20.11.2025",
      reward: 275,
    },
    {
      id: 3,
      name: "Homework for polish",
      isComplete: false,
      rank: "B",
      type: "education",
      estimatedTime: 180,
      importance: 5,
      urgency: 3,
      difficulty: 4,
      severity: "low",
      deadline: "20.11.2025",
      reward: 275,
    },
    {
      id: 4,
      name: "Homework for polish",
      isComplete: false,
      rank: "C",
      type: "education",
      estimatedTime: 180,
      importance: 5,
      urgency: 3,
      difficulty: 4,
      severity: "low",
      deadline: "20.11.2025",
      reward: 275,
    },
    {
      id: 5,
      name: "Homework for polish",
      isComplete: false,
      rank: "D",
      type: "education",
      estimatedTime: 180,
      importance: 5,
      urgency: 3,
      difficulty: 4,
      severity: "low",
      deadline: "20.11.2025",
      reward: 275,
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
