import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Paper,
  Typography,
  Grid,
  ThemeProvider
} from "@material-ui/core";
import Head from "next/head";

import { useTitle } from "src/store/page";
import { useTheme } from "src/theme";
import NavigationButtons from "src/components/NavigationButtons";
import Copyright from "src/components/Copyright";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  toolbar: {
    [theme.breakpoints.up("lg")]: {
      width: theme.breakpoints.values.lg,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

export default function Layout({ title, children }) {
  const header = useTitle();
  const classes = useStyles({});
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <title>
          {title} - {header}
        </title>
      </Head>
      <AppBar color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            {header}
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h4" align="center">
                {title}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              {children}
            </Grid>

            <Grid item xs={12}>
              <NavigationButtons />
            </Grid>
          </Grid>
        </Paper>
        <Copyright />
      </main>
    </ThemeProvider>
  );
}
