import React from "react";
import { Box, CSSReset, Text, ThemeProvider } from "@chakra-ui/core";
import { customTheme } from "./theme";
import RollDice from "./RollDice";
import { DiceProvider } from "./DiceContext";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box
        display="grid"
        gridGap={2}
        gridAutoFlow="row"
        justifyContent="center"
        p={10}
      >
        <DiceProvider>
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            {"< 🎲 Kockadobás />"}
          </Text>
          <RollDice />
        </DiceProvider>
      </Box>
    </ThemeProvider>
  );
};

export default App;
