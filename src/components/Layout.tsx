import React, { FunctionComponent } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import theme from "src/theme";

type Props = {
  title?: string;
};

const Layout: FunctionComponent<Props> = ({
  children,
  title = "React coding task «Text Layout»"
}) => (
  <>
    <CssBaseline />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Layout;
