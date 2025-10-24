import { RankOfTask, TypeOfTask } from "@/types/task";
import Image from "next/image";
import { FC } from "react";

interface Props {
  type: TypeOfTask;
  rank: RankOfTask;
  isComplete: boolean;
}

const TYPE_IMAGE: Record<TypeOfTask, string> = {
  education: "/education.png",
  work: "/work.jpg",
  domestic: "/domestic.png",
};

const RANK_IMAGE: Record<RankOfTask, string> = {
  S: "/S.svg",
  A: "/A.svg",
  B: "/B.svg",
  C: "/C.svg",
  D: "/D.svg",
  E: "/E.svg",
};

export const TaskHeader: FC<Props> = ({ type, rank, isComplete }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <span className="text-xs">type</span>
          <Image
            src={TYPE_IMAGE[type]}
            alt="Type"
            width={16}
            height={16}
            className="w-7 h-7 object-contain"
          />
        </div>
        {!isComplete && (
          <p className="pt-3 text-red-500 text-xs h-full">
            Still in progress...
          </p>
        )}
        <Image
          src={RANK_IMAGE[rank]}
          alt="Rank"
          width={16}
          height={16}
          className="w-12 h-12 object-contain"
        />
      </div>
    </div>
  );
};
