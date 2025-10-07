export interface Task {
  id: number;
  name: string;
  isComplete: boolean;
  type: "education" | "work" | "domestic";
  severity: "easy" | "semi-difficult" | "difficult";
  urgency: "not urgent" | "semi-urgent" | "urgent";
  deadline?: Date;
}
