"use client";
import { DayBlock } from "@/components/calendar/dayBlock";
import TaskCard from "@/components/taskCard/taskCard";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);

  return (
    <div className="p-10">
      <main>
        <div className="grid grid-cols-5 gap-1">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <div className="pt-10">
          <DayBlock name="Mon" isSelected={false} date="20.10" />
        </div>
      </main>
    </div>
  );
}
