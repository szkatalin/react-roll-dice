import React, { createContext, useState } from "react";

export const sides = ["one", "two", "three", "four", "five", "six"];

export const getRollDiceValues = (count: number): string[] => {
  return Array.from(
    { length: count },
    () => sides[Math.floor(Math.random() * sides.length)]
  );
};

type InitialStateType = {
  dice: string[];
  roll: () => void;
  count: number;
  setCount: (count: number) => void;
  isRolling: boolean;
  history: string[][];
};

const initialDice = getRollDiceValues(2);

const initialState = {
  dice: initialDice,
  roll: () => {},
  count: 2,
  setCount: () => {},
  isRolling: false,
  history: [initialDice],
};

export const DiceContext = createContext<{ state: InitialStateType }>({
  state: initialState,
});

export const DiceProvider = (props: any) => {
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState([initialDice]);
  const [dice, setDice] = useState(initialDice);
  const [count, setCount] = useState(2);

  let animateRolling = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  let roll = (): void => {
    const newDice = getRollDiceValues(count);
    setDice(newDice);
    setHistory([...history.map((h) => h), newDice]);
    animateRolling();
  };

  return (
    <DiceContext.Provider
      value={{
        state: { dice, roll, count, setCount, isRolling, history },
      }}
    >
      {props.children}
    </DiceContext.Provider>
  );
};
