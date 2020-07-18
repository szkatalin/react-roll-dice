import React, { createContext, useState } from "react";

const sides = ["one", "two", "three", "four", "five", "six"];

// @ts-ignore
export const DiceContext = createContext();

export const DiceProvider = (props: any) => {
  const getRollDiceValue = () => {
    return sides[Math.floor(Math.random() * sides.length)];
  };

  const animateRolling = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 500);
  };

  const roll = () => {
    animateRolling();
    let diceValues: string[] = [];
    for (let i = 0; i < 2; i++) {
      diceValues.push(getRollDiceValue());
    }
    setDice(diceValues);
  };

  const [dice, setDice] = useState([getRollDiceValue(), getRollDiceValue()]);
  const [isRolling, setRolling] = useState(false);
  // TODO: history
  // const [history, setHistory] = useState([]);

  // TODO: kockák száma
  // const [count, setCount] = useState(2);

  return (
    <DiceContext.Provider value={[isRolling, dice, roll]}>
      {props.children}
    </DiceContext.Provider>
  );
};
