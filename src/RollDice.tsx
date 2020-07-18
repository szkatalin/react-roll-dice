import React, { useContext } from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import Die from "./Die";
import { DiceContext } from "./DiceContext";

const RollDice = () => {
  const [isRolling, dice, rollDice] = useContext(DiceContext);

  return (
    <Box>
      <Box
        display="grid"
        justifyContent="center"
        gridGap={10}
        gridAutoFlow="column dense"
      >
        {dice.map((dieFace: string, index: number) => {
          return <Die key={index} face={dieFace} />;
        })}
      </Box>
      <Flex align="center" justify="center" p={30}>
        <Button
          variantColor="purple"
          onClick={rollDice}
          isLoading={isRolling}
          loadingText="Dobás..."
        >
          Dobok!
        </Button>
      </Flex>
    </Box>
  );
};

export default RollDice;
