import { Box, List, ListItem } from "@chakra-ui/core";
import React, { useContext } from "react";
import { DiceContext, sides } from "../contexts/DiceContext";

export const History = () => {
  const { state } = useContext(DiceContext);

  const getNumber = (side: string) => sides.indexOf(side) + 1;

  const getSum = (array: string[]): number => {
    let s = 0;
    array.map((item) => {
      return (s += getNumber(item));
    });
    return s;
  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" mt={6}>
      <Box p="5">
        <Box mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight">
          Előzmények
        </Box>

        <Box d="flex" alignItems="baseline" pb={3}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {state.history.length} darab
          </Box>
        </Box>

        <Box>
          <List styleType="disc">
            {state.history.map((historyItem: string[], index: number) => {
              return (
                <ListItem key={index}>
                  {historyItem.map((side, index) => {
                    return (
                      getNumber(side) +
                      (index !== historyItem.length - 1
                        ? " + "
                        : ` = ${getSum(historyItem)}`)
                    );
                  })}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
