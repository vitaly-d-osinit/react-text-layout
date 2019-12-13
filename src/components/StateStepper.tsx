import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { getStepsList } from "src/store/steps";
import { List } from "src/store/steps/types";

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

export default function StateStepper() {
  const classes = useStyles({});
  // const activeStep = useSelector(getActiveStep);
  const stepsList: List = useSelector(getStepsList);

  return (
    <Stepper activeStep={1} className={classes.stepper}>
      {Array.isArray(stepsList) &&
        stepsList.map(({ id, title }) => (
          <Step key={id}>
            <StepLabel>{title}</StepLabel>
          </Step>
        ))}
    </Stepper>
  );
}
