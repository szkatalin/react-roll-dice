import { Box, List, ListItem } from "@chakra-ui/core";
import React, { useContext, useEffect } from "react";
import { DiceContext } from "../contexts/DiceContext";
import { Types as HistoryTypes } from "../reducers/HistoryReducer";
import { sides, Types as DiceTypes } from "../reducers/DiceReducer";

export const History = () => {
  const { state, dispatch } = useContext(DiceContext);

  useEffect(() => {
    dispatch({
      type: HistoryTypes.AddHistory,
      payload: { history: state.diceData.dice },
    });
    setTimeout(() => {
      dispatch({
        type: DiceTypes.StopRolling,
      });
    }, 1000);
  }, [dispatch, state.diceData.dice]);

  const getSum = (array: string[]) => {
    let s = 0;
    array.map((item) => {
      s += sides.indexOf(item) + 1;
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
                  {historyItem.map((number, index) => {
                    return (
                      number +
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
