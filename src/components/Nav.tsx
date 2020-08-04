import React, { useContext } from "react";
import { Box, Input, Text } from "@chakra-ui/core";
import { DiceContext } from "../contexts/DiceContext";

export const Nav = () => {
  const { state } = useContext(DiceContext);

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
        id="count"
        type="number"
        min="1"
        max="9"
        width={50}
        isFullWidth={false}
        variant="filled"
        size="lg"
        value={state.count}
        onChange={(event: any) => {
          state.setCount(event.target.value);
        }}
      />
      {state.count}
      <Text fontSize="6xl" fontWeight="bold" textAlign="center">
        {"} Kockadobás />"}
      </Text>
    </Box>
  );
};
