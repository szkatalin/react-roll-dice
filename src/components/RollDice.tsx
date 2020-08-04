import React, { Fragment, useContext } from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import Die from "./Die/Die";
import { DiceContext } from "../contexts/DiceContext";

const RollDice = () => {
  const { state } = useContext(DiceContext);

  return (
    <Fragment>
      <Flex align="center" justify="center" wrap="wrap">
        {state.dice.map((dieFace: string, index: number) => {
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
          onClick={state.roll}
          isLoading={state.isRolling}
          loadingText="Dobás..."
        >
          Dobok!
        </Button>
      </Flex>
    </Fragment>
  );
};

export default RollDice;
