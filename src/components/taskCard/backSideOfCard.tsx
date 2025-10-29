import {
  DifficultyVariants,
  ImportanceVariants,
  RankOfTask,
  TaskReward,
  TypeOfTask,
  UrgencyVariants,
} from "@/types/task";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { FC } from "react";
import { CARD_THEME } from "./frontalSideOfCard";
import { TaskHeader } from "./taskHeader";

dayjs.extend(customParseFormat);

const REWARDS_PER_RANK: Record<RankOfTask, number> = {
  S: 100,
  A: 60,
  B: 40,
  C: 30,
  D: 20,
};
export const calculateReward = (
  rank: RankOfTask,
  deadline: string,
  importance: ImportanceVariants,
  urgency: UrgencyVariants,
  difficulty: DifficultyVariants
): TaskReward => {
  const deadlineDate = dayjs(deadline, "DD.MM.YYYY");
  const now = dayjs();
  const maxAtributesCounter = () => {};

  const deadlineBonus =
    deadlineDate.diff(now, "day") > 2 ? REWARDS_PER_RANK[rank] * 1.2 : 0;
  // const comboBonus
  const result: TaskReward = {
    XP_rank: REWARDS_PER_RANK[rank],
    XP_time_bonus: deadlineBonus,
    XP_combo_bonus: number,
    XP_series_multiplier: number,
  };
  return result;
};

interface Props {
  type: TypeOfTask;
  rank: RankOfTask;
  isComplete: boolean;
  reward: number;
}

export const BackSideOfCard: FC<Props> = ({ type, rank, isComplete }) => {
  return (
    <div
      className={`p-2 min-h[474px] flex flex-col ${CARD_THEME[rank].background} border-3 shadow-lg ${CARD_THEME[rank].shadow_color} ${CARD_THEME[rank].border_color} rounded-2xl max-w-1/6`}
    >
      <TaskHeader type={type} rank={rank} isComplete={isComplete} />
      <h1 className="text-2xl text-center pb-2">Bounty</h1>
      <hr className="mx-5"></hr>
      <div></div>
    </div>
  );
};
