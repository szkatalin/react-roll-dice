import React, { useContext } from "react";
import { Box, Input, Text } from "@chakra-ui/core";
import { DiceContext } from "../contexts/DiceContext";
import { Types } from "../reducers/DiceReducer";

export const Nav = () => {
  const { state, dispatch } = useContext(DiceContext);

  const handleChange = (event: any) => {
    dispatch({ type: Types.SetCount, payload: { count: event.target.value } });
  };

  return (
    <Box
      display="grid"
      alignItems="center"
      justifyContent="center"
      gridGap={2}
      gridAutoFlow="column dense"
    >
      <Text fontSize="6xl" fontWeight="bold" textAlign="center">
        {"< 🎲={"}
      </Text>
      <Input
        width={50}
        isFullWidth={false}
        variant="filled"
        size="lg"
        value={state.diceData.count}
        onChange={handleChange}
      />
      <Text fontSize="6xl" fontWeight="bold" textAlign="center">
        {"} Kockadobás />"}
      </Text>
    </Box>
  );
};
