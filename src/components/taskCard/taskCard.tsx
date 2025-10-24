import { Task } from "@/types/task";
import { FC, useState } from "react";
import { FrontalSideOfCard } from "./frontalSideOfCard";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const [isFrontalSideActive, setIsFrontalSideActive] = useState(true);
  return (
    <div className="">
      {isFrontalSideActive && <FrontalSideOfCard task={task} />}
    </div>
  );
};

export default TaskCard;
