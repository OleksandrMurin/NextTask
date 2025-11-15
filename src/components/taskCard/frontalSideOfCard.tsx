import { Task } from "@/types/task";
import Image from "next/image";
import { FC } from "react";
import { TaskAttribute } from "./taskAttribute";
import { TaskHeader } from "./taskHeader";

interface Props {
  task: Task;
}

export const FrontalSideOfCard: FC<Props> = ({ task }) => {
  return (
    <div
      style={{
        background: `var(--rank-${task.rank}-bg-color)`,
        borderColor: `var(--rank-${task.rank}-border-color)`,
        boxShadow: `0 8px 16px 0 var(--rank-${task.rank}-hover-color)`,
      }}
      className={`p-2 flex flex-col border-3 shadow-lg rounded-2xl w-fit`}
    >
      <TaskHeader
        type={task.type}
        rank={task.rank}
        isComplete={task.isComplete}
      />
      <h1 className=" w-full text-center text-2xl">{task.name}</h1>
      {task.estimatedTime && (
        <div>
          <p className="w-full text-center text-xs">estimated time</p>
          <h2 className="w-full text-center text-xl">{`${Math.floor(
            task.estimatedTime / 60
          )}h ${task.estimatedTime % 60}min`}</h2>
        </div>
      )}
      <Image
        src="/guy-with-boxes.svg"
        alt="Guy with boxes"
        width={16}
        height={16}
        className="w-full h-fit object-contain"
      />
      <section className="pt-1 flex flex-wrap gap-2">
        <TaskAttribute
          name="importance"
          variant={task.importance}
          className="flex-1"
        />
        <TaskAttribute
          name="urgency"
          variant={task.urgency}
          className="flex-1"
        />
        <TaskAttribute
          name="difficulty"
          variant={task.difficulty}
          className="flex-1"
        />
      </section>
      <p className="pt-2 text-xs w-full text-end text-gray-500">
        Deadline: {task.deadline}
      </p>
    </div>
  );
};
