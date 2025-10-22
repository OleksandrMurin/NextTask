export type ImportanceVariants =
  | "unimportant"
  | "slightly important"
  | "moderately important"
  | "important"
  | "extremely important";
export type UrgencyVariants = "not urgent" | "semi-urgent" | "urgent";
export type DifficultyVariants = "easy" | "moderate" | "hard" | "insane";
export type SeverityVariants = "low" | "medium" | "hight" | "critical";

export interface Task {
  id: number;
  name: string;
  isComplete: boolean;
  rank: "S" | "A" | "B" | "C" | "D" | "E";
  type: "education" | "work" | "domestic";
  estimatedTime?: number;
  importance: ImportanceVariants;
  urgency: UrgencyVariants;
  difficulty: DifficultyVariants;
  severity?: SeverityVariants;
  deadline?: string;
}
