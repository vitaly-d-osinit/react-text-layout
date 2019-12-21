import { useMemo } from "react";
import { createMuiTheme } from "@material-ui/core";

export const useTheme = () => {
  const prefersDarkMode = false; // useMediaQuery("(prefers-color-scheme: dark)");

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
