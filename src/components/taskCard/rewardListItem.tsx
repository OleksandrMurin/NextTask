import Image from "next/image";
import { FC } from "react";

interface Props {
  amountOfXP: number;
  children: React.ReactNode;
}

export const RewardListItem: FC<Props> = ({ amountOfXP, children }) => {
  return (
    <li className="flex gap-1 items-center">
      <span>+{amountOfXP}</span>
      <Image
        src="/XP-icon.png"
        alt="Xp icon"
        width={24}
        height={24}
        className=""
      />
      <p className="text-xs text-gray-500">{children}</p>
    </li>
  );
};
