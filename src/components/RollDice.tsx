import React, { useContext, Fragment } from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import Die from "./Die/Die";
import { DiceContext } from "../contexts/DiceContext";
import { Types as DiceTypes } from "../reducers/DiceReducer";

const RollDice = () => {
  const { state, dispatch } = useContext(DiceContext);

  const rollDice = () => {
    dispatch({ type: DiceTypes.RollDice });
  };

  return (
    <Fragment>
      <Flex align="center" justify="center" wrap="wrap">
        {state.diceData.dice.map((dieFace: string, index: number) => {
          return (
            <Box key={index} p={5}>
              <Die key={index} face={dieFace} />
            </Box>
          );
        })}
      </Flex>
      <Flex align="center" justify="center">
        <Button
          variantColor="green"
          onClick={rollDice}
          isLoading={state.diceData.isRolling}
          loadingText="Dobás..."
        >
          Dobok!
        </Button>
      </Flex>
    </Fragment>
  );
};

export default RollDice;
