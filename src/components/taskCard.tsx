import { Task } from "@/types/task";

const TaskCard = (task: Task) => {
  return (
    <div className="flex flex-col">
      <h2>{task.name}</h2>
      <p>{task.type}</p>
      <p>{task.urgency}</p>
      <p>{task.severity}</p>
      <p>{task.isComplete}</p>
    </div>
  );
};

export default TaskCard;
