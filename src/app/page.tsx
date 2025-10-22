"use client";
import TaskAttribute from "@/components/taskAttribute";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.tasks);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
        <div className="pt-60 flex flex-col gap-5">
          <TaskAttribute name="importance" variant="extremely important" />
          <TaskAttribute name="urgency" variant="semi-urgent" />
          <TaskAttribute name="difficulty" variant="insane" />
        </div>
      </main>
    </div>
  );
}
