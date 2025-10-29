export type ImportanceVariants =
  | "unimportant"
  | "slightly important"
  | "moderately important"
  | "important"
  | "extremely important";
export type UrgencyVariants = "not urgent" | "semi-urgent" | "urgent";
export type DifficultyVariants = "easy" | "moderate" | "hard" | "insane";
export type SeverityVariants = "low" | "medium" | "hight" | "critical";
export type RankOfTask = "S" | "A" | "B" | "C" | "D";
export type TypeOfTask = "education" | "work" | "domestic";

export interface Task {
  id: number;
  name: string;
  isComplete: boolean;
  rank: RankOfTask;
  type: TypeOfTask;
  estimatedTime?: number;
  importance: ImportanceVariants;
  urgency: UrgencyVariants;
  difficulty: DifficultyVariants;
  severity?: SeverityVariants;
  deadline?: string;
  reward: number;
}

export interface TaskReward {
  XP_rank: number;
  XP_time_bonus: number;
  XP_combo_bonus: number;
  XP_series_multiplier: number;
}
