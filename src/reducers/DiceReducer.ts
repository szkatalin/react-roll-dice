import { ActionMap } from "./ActionMap";
import { DiceType } from "../contexts/DiceContext";
import { HistoryActions } from "./HistoryReducer";

export const getRollDiceValues = (count: number) => {
  return Array.from(
    { length: count },
    () => sides[Math.floor(Math.random() * sides.length)]
  );
};

export const sides = ["one", "two", "three", "four", "five", "six"];

export enum Types {
  RollDice = "ROLL_DICE",
  SetCount = "SET_COUNT",
  StopRolling = "STOP_ROLLING",
}

type DicePayload = {
  [Types.RollDice]: undefined;
  [Types.SetCount]: { count: number };
  [Types.StopRolling]: undefined;
};

export type DiceActions = ActionMap<DicePayload>[keyof ActionMap<DicePayload>];

export const DiceReducer = (
  state: DiceType,
  action: DiceActions | HistoryActions
) => {
  switch (action.type) {
    case Types.RollDice:
      return {
        ...state,
        dice: getRollDiceValues(state.count),
        isRolling: true,
      };
    case Types.SetCount:
      return {
        dice: getRollDiceValues(action.payload.count),
        count: action.payload.count,
        isRolling: true,
      };
    case Types.StopRolling:
      return {
        ...state,
        isRolling: false,
      };
    default:
      return state;
  }
};
