"use client";
import TaskCard from "@/components/taskCard/taskCard";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  return (
    <div className="p-10">
      <main className="">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </main>
    </div>
  );
}
