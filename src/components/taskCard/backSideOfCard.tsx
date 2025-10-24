import { RankOfTask, TypeOfTask } from "@/types/task";
import { FC } from "react";
import { CARD_THEME } from "./frontalSideOfCard";
import { TaskHeader } from "./taskHeader";

interface Props {
  type: TypeOfTask;
  rank: RankOfTask;
  isComplete: boolean;
}

export const BackSideOfCard: FC<Props> = ({ type, rank, isComplete }) => {
  return (
    <div
      className={`p-2 flex flex-col ${CARD_THEME[rank].background} border-3 shadow-lg ${CARD_THEME[rank].shadow_color} ${CARD_THEME[rank].border_color} rounded-2xl max-w-1/6`}
    >
      <TaskHeader type={type} rank={rank} isComplete={isComplete} />
    </div>
  );
};
