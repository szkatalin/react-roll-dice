import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

import "./Die.css";
import { DiceContext } from "../../contexts/DiceContext";

library.add(
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
);

const Die = (props: { face: string }) => {
  const { state } = useContext(DiceContext);

  return (
    <FontAwesomeIcon
      className={state.isRolling ? "shaking" : ""}
      icon={["fas", `dice-${props.face}` as IconName]}
      size="10x"
    />
  );
};

export default Die;
