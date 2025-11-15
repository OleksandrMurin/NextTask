import { TASK_ATTRIBUTES } from "@/constants";
import { RankOfTask, TaskReward, TypeOfTask } from "@/types/task";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";
import { FC } from "react";
import { RewardListItem } from "./rewardListItem";
import { TaskHeader } from "./taskHeader";

dayjs.extend(customParseFormat);

const REWARDS_PER_RANK: Record<RankOfTask, number> = {
  S: 100,
  A: 60,
  B: 40,
  C: 30,
  D: 20,
};

type CSSVars = React.CSSProperties & {
  [key: `--${string}`]: string | number;
};

export function calculateReward(
  rank: RankOfTask,
  deadline: string,
  importance: number,
  urgency: number,
  difficulty: number
): TaskReward {
  const deadlineDate = dayjs(deadline, "DD.MM.YYYY");
  const now = dayjs();

  const maxAttributesCounter = (
    props: Partial<{
      [K in keyof typeof TASK_ATTRIBUTES]: number;
    }>
  ) => {
    return (Object.keys(props) as Array<keyof typeof TASK_ATTRIBUTES>).filter(
      (x) => props[x] == TASK_ATTRIBUTES[x].length
    ).length;
  };

  let comboBonus = 0;
  const amountOfMaxAttributes = maxAttributesCounter({
    importance,
    urgency,
    difficulty,
  });
  if (amountOfMaxAttributes == 1) comboBonus = REWARDS_PER_RANK[rank] * 0.1;
  if (amountOfMaxAttributes == 2) comboBonus = REWARDS_PER_RANK[rank] * 0.15;
  if (amountOfMaxAttributes == 3) comboBonus = REWARDS_PER_RANK[rank] * 0.2;
  else comboBonus;

  const deadlineBonus =
    deadlineDate.diff(now, "day") > 2 ? REWARDS_PER_RANK[rank] * 0.2 : 0;

  const result: TaskReward = {
    XP_rank: REWARDS_PER_RANK[rank],
    XP_time_bonus: deadlineBonus,
    XP_combo_bonus: comboBonus,
    XP_series_multiplier: 1.11,
  };

  return result;
}

interface Props {
  type: TypeOfTask;
  rank: RankOfTask;
  isComplete: boolean;
  deadline: string;
  importance: number;
  urgency: number;
  difficulty: number;
}

export const BackSideOfCard: FC<Props> = ({
  type,
  rank,
  isComplete,
  deadline,
  importance,
  urgency,
  difficulty,
}) => {
  const reward = calculateReward(
    rank,
    deadline,
    importance,
    urgency,
    difficulty
  );
  const btnVars: CSSVars = {
    "--btn-bg": `var(--rank-${rank}-bg-button)`,
    "--btn-border": `var(--rank-${rank}-bg-border)`,
  };
  return (
    <div
      style={{
        background: `var(--rank-${rank}-bg-color)`,
        borderColor: `var(--rank-${rank}-border-color)`,
        boxShadow: `0 8px 16px 0 var(--rank-${rank}-hover-color)`,
      }}
      className={`p-2 min-h-[474px]  flex flex-col  border-3 shadow-lg   rounded-2xl w-fit`}
    >
      <TaskHeader type={type} rank={rank} isComplete={isComplete} />
      <div className="mx-5">
        <div className="pb-2 flex justify-around items-end">
          <Image
            src="/treasure.png"
            alt="Xp icon"
            width={30}
            height={30}
            className="object-contain"
          />
          <h1 className="text-2xl pt-10 text-center">Bounty</h1>
          <Image
            src="/treasure.png"
            alt="Xp icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </div>

        <hr className=" border-t-2" />
        <ul className="py-3 flex flex-col gap-1 ">
          <RewardListItem amountOfXP={reward.XP_rank}>
            for rank {rank}
          </RewardListItem>
          <RewardListItem amountOfXP={reward.XP_time_bonus}>
            for fast completion
          </RewardListItem>
          <RewardListItem amountOfXP={reward.XP_combo_bonus}>
            for amount of max level attributes
          </RewardListItem>
        </ul>
        <hr className="border-dashed " />
        <div className="gap-1 flex justify-end items-center">
          <p className="text-[14px]">X {reward.XP_series_multiplier}</p>
          <p className="my-2 text-gray-500 text-xs ">streak multiplier </p>
          <Image src="/fire.png" alt="Xp icon" width={18} height={18} />
        </div>
        <hr />
        <div className="pt-2 flex justify-between">
          <p>Total experience: </p>
          <div className="flex gap-1">
            <p>
              {Math.floor(
                (reward.XP_combo_bonus +
                  reward.XP_rank +
                  reward.XP_time_bonus) *
                  reward.XP_series_multiplier
              )}
            </p>
            <Image src="/XP-icon.png" alt="Xp icon" width={24} height={24} />
          </div>
        </div>

        <button
          style={
            {
              "--btn-bg": `var(--rank-${rank}-button-color)`,
              "--btn-border": `var(--rank-${rank}-hover-color)`,
            } as React.CSSProperties
          }
          className={`rounded-xs w-full mt-20 flex justify-center items-center border-2 gap-4 bg-[var(--btn-bg)] border-[var(--btn-border)] transition-all duration-500 hover:scale-100 hover:bg-[var(--btn-border)]`}
        >
          <Image
            src="/complete-icon.png"
            alt="Xp icon"
            width={30}
            height={30}
            className="object-contain"
          />
          <span>Complete</span>
        </button>
      </div>
    </div>
  );
};
