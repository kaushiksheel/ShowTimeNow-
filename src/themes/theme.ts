import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

export const theme = extendTheme({
  config,
  colors: {
    blue: {
      100: "#0D6EFD",
    },
  },
});
