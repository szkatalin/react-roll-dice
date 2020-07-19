import React from "react";
import { Box, CSSReset, SimpleGrid, ThemeProvider } from "@chakra-ui/core";
import { customTheme } from "./theme";
import RollDice from "./components/RollDice";
import { DiceProvider } from "./contexts/DiceContext";
import { Nav } from "./components/Nav";
import { History } from "./components/History";

export const App = () => {
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
          <Nav />
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <RollDice />
            </Box>
            <Box>
              <History />
            </Box>
          </SimpleGrid>
        </DiceProvider>
      </Box>
    </ThemeProvider>
  );
};
