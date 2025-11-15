import { Task } from "@/types/task";
import { FC, useState } from "react";
import { BackSideOfCard } from "./backSideOfCard";
import { FrontalSideOfCard } from "./frontalSideOfCard";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[290px] h-[465px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((p) => !p)}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-1000
          [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        <div
          className="
            absolute inset-0 rounded-xl shadow-xl bg-white 
            [backface-visibility:hidden]
          "
        >
          <FrontalSideOfCard task={task} />
        </div>
        <div
          className="
            absolute inset-0 rounded-xl shadow-xl bg-white
            [transform:rotateY(180deg)] 
            [backface-visibility:hidden]
          "
        >
          <BackSideOfCard {...task} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
