import { useMemo } from "react";
import { createMuiTheme, useMediaQuery } from "@material-ui/core";

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );
};
