import Image from "next/image";
import { FC } from "react";
import { TASK_ATTRIBUTES, TaskAttributeProps } from "../constants";

const TaskAttribute: FC<TaskAttributeProps> = ({ name, variant }) => {
  const attributeLevels = TASK_ATTRIBUTES[name] as Record<string, number>;
  const numberOfLevels = Object.keys(attributeLevels).length;

  const setImage = (attribute: string) => {
    switch (attribute) {
      case "urgency":
        return "/urgency.png";
      case "importance":
        return "/importance.png";
      case "difficulty":
        return "/difficulty.png";
      default:
        return "https://cdn-icons-png.flaticon.com/512/95/95458.png";
    }
  };
  const imageURL = setImage(name);

  const getColor = (index: number) => {
    const progress = index / numberOfLevels;
    if (index + 1 <= attributeLevels[variant])
      if (progress < 0.3) return "bg-green-500";
      else if (progress >= 0.3 && progress <= 0.7) return "bg-yellow-300";
      else return "bg-red-500";
    else return "bg-gray-300";
  };
  return (
    <div className="flex flex-col bg-gray-100 gap-3">
      <div className="flex items-center gap-2">
        <Image
          src={imageURL}
          alt="Importance"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
        <h2 className="text-2xl">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
      <div className="flex pl-6 items-center">
        <p className="pr-2 flex-1 text-xs font-bold">
          {variant.toLocaleUpperCase()}
        </p>
        <div className="flex flex-1 gap-1">
          {Array.from({ length: numberOfLevels }).map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full ${getColor(i)}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskAttribute;
