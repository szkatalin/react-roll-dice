import { ActionMap } from "./ActionMap";
import { DiceActions } from "./DiceReducer";

export enum Types {
  AddHistory = "ADD_HISTORY",
}

type HistoryPayload = {
  [Types.AddHistory]: {
    history: string[];
  };
};

export type HistoryActions = ActionMap<HistoryPayload>[keyof ActionMap<
  HistoryPayload
>];

export const HistoryReducer = (
  state: string[][],
  action: HistoryActions | DiceActions
) => {
  switch (action.type) {
    case Types.AddHistory:
      return [...state, action.payload.history];
    default:
      return state;
  }
};
