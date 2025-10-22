// prettier-ignore
export const TASK_ATTRIBUTES = {
  "importance": {
    "unimportant": 1,
    "slightly important": 2,
    "moderately important": 3,
    "important": 4,
    "extremely important": 5,
  },
  "urgency": {
    "not urgent": 1,
    "semi-urgent": 2,
    "urgent": 3,
  },
  "difficulty": {
    "easy": 1,
    "moderate": 2,
    "hard": 3,
    "insane": 4,
  },
  "severity": {
    "low": 1,
    "medium": 2,
    "hight": 3,
    "critical": 4,
  }
}

type TaskAttributes = typeof TASK_ATTRIBUTES;
type AttributeName = keyof TaskAttributes;
type AttributeVariant<K extends AttributeName> = keyof TaskAttributes[K];

// mapped-union: создаёт объединение конкретных пар {name, variant}
export type TaskAttributeProps = {
  [K in AttributeName]: {
    name: K;
    variant: AttributeVariant<K>;
  };
}[AttributeName];
