import { ComponentPropsWithoutRef } from "react";

export const RANKS_BASE_COLOR = {
  S: "#F5B33B",
  A: "#80B357",
  B: "#3EA5D0",
  C: "#A758C3",
  D: "#E3393C",
};

export const TASK_ATTRIBUTES = {
  importance: [
    "unimportant",
    "slightly important",
    "moderately important",
    "important",
    "extremely important",
  ],
  urgency: ["not urgent", "semi-urgent", "urgent"],
  difficulty: ["easy", "moderate", "hard", "insane"],

  severity: ["low", "medium", "high", "critical"],
};

export type TaskAttributeProps = {
  name: TaskAttributeName;
  variant: number;
} & ComponentPropsWithoutRef<"div">;

export type TaskAttributeName = keyof typeof TASK_ATTRIBUTES;

// type TaskAttributes = typeof TASK_ATTRIBUTES;
// type AttributeName = keyof TaskAttributes;
// type AttributeVariant<K extends AttributeName> = keyof TaskAttributes[K];

// mapped-union: создаёт объединение конкретных пар {name, variant}
// {
//   [K in AttributeName]: {
//     name: K;
//     variant: AttributeVariant<K>;
//   };
// }[AttributeName]
