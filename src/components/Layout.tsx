import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { getTitle } from "src/store/page";
import StateStepper from "src/components/StateStepper";
import StateButtons from "src/components/StateButtons";
import Copyright from "src/components/Copyright";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
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

export default function Layout({ children }) {
  const title = useSelector(getTitle);
  const classes = useStyles({});

  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            {children}
          </Typography>

          <Grid container>
            <Grid item xs={8}>
              <StateStepper />
            </Grid>
            <Grid item xs={4}>
              <StateButtons />
            </Grid>
          </Grid>
        </Paper>

        <Copyright />
      </main>
    </>
  );
}
