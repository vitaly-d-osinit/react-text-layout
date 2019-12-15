import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { useColumns, useActiveColumn } from "src/store";

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(4, 0, 0)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function ColumnsStepper() {
  const classes = useStyles({});
  const activeColumn = useActiveColumn();
  const columns = useColumns();

  return (
    <Stepper activeStep={activeColumn} className={classes.stepper}>
      {columns.map(column => (
        <Step key={column}>
          <StepLabel>{column}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
