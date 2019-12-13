import React, { useCallback, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { getStepsList, getActiveStep, setActiveStep } from "src/store/steps";
import { Step } from "src/store/steps/types";

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

type StateButtonProps = {
  step: Step;
};

const StateButton: FunctionComponent<StateButtonProps> = ({ step }) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const activeStep = useSelector(getActiveStep);

  const handleClick = useCallback(() => {
    dispatch(setActiveStep(step.id));
  }, [dispatch, step.id]);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      className={classes.button}
      disabled={step.id !== activeStep}
    >
      {step.shortTitle}
    </Button>
  );
};

export default function StateButtons() {
  const stepsList = useSelector(getStepsList);
  const classes = useStyles({});

  return (
    <div className={classes.buttons}>
      {Array.isArray(stepsList) &&
        stepsList.map(step => <StateButton step={step} key={step.id} />)}
    </div>
  );
}
