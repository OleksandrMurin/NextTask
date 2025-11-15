import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { TASK_ATTRIBUTES, TaskAttributeProps } from "../../constants";

const ATTRIBUTE_IMAGES: Record<string, string> = {
  urgency: "/urgency.png",
  importance: "/importance.png",
  difficulty: "/difficulty.png",
};

export const TaskAttribute: FC<TaskAttributeProps> = ({
  name,
  variant,
  className,
  ...props
}) => {
  const numberOfLevels = TASK_ATTRIBUTES[name].length;

  const getColor = (index: number) => {
    const progress = index / numberOfLevels;
    if (index + 1 <= variant)
      if (progress < 0.3) return "bg-green-500";
      else if (progress >= 0.3 && progress <= 0.65) return "bg-yellow-300";
      else return "bg-red-500";
    else return "bg-gray-300";
  };
  return (
    <div className={classNames("flex flex-col max-w-35", className)} {...props}>
      <div className="flex items-center gap-1">
        <Image
          src={ATTRIBUTE_IMAGES[name]}
          alt="Importance"
          width="16"
          height="16"
          className="w-4 h-4 object-contain"
        />
        <h2 className="text-xs font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>
      <div className="flex pl-1 items-center h-full">
        <p className="pr-2 flex-1 text-xs ">
          {TASK_ATTRIBUTES[name][variant - 1]}
        </p>
        <div className="flex flex-1 gap-0.5">
          {Array.from({ length: numberOfLevels }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${getColor(i)}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
