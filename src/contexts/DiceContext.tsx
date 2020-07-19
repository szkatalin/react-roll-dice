import React, { createContext, Dispatch, useReducer } from "react";
import {
  DiceActions,
  DiceReducer,
  getRollDiceValues,
} from "../reducers/DiceReducer";
import { HistoryReducer, HistoryActions } from "../reducers/HistoryReducer";

export type DiceType = {
  dice: string[];
  count: number;
  isRolling: boolean;
};

type InitialStateType = {
  diceData: DiceType;
  history: string[][];
};

const initialState = {
  diceData: { dice: getRollDiceValues(2), count: 2, isRolling: false },
  history: [],
};

export const DiceContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<DiceActions | HistoryActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { diceData, history }: InitialStateType,
  action: DiceActions | HistoryActions
) => ({
  diceData: DiceReducer(diceData, action),
  history: HistoryReducer(history, action),
});

export const DiceProvider = (props: any) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <DiceContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DiceContext.Provider>
  );
};
