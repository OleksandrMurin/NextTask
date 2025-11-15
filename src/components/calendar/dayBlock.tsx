import { FC } from "react";

interface Props {
  name: string;
  isSelected: boolean;
  date: string;
}

export const DayBlock: FC<Props> = ({ name, isSelected, date }) => {
  return (
    <div className="w-fit flex flex-col">
      <span className="text-3xl">{name}</span>
      <span className="text-gray-500">{date}</span>
    </div>
  );
};
