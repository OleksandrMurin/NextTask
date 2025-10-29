import { Task } from "@/types/task";
import { FC, useState } from "react";
import { BackSideOfCard } from "./backSideOfCard";
import { FrontalSideOfCard } from "./frontalSideOfCard";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const [isFrontalSideActive, setIsFrontalSideActive] = useState(true);
  return (
    <div className="" onClick={() => setIsFrontalSideActive((prev) => !prev)}>
      {isFrontalSideActive && <FrontalSideOfCard task={task} />}
      {!isFrontalSideActive && (
        <BackSideOfCard
          type={task.type}
          rank={task.rank}
          isComplete={task.isComplete}
          reward={task.reward}
        />
      )}
    </div>
  );
};

export default TaskCard;
