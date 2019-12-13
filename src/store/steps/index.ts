import { createSelector } from "reselect";
import { State, StepId } from "./types";

export const STATE_DIRECTORY = "steps";

export const INITIAL_STATE: State = {
  list: [
    {
      id: "STEP_TEXT",
      title: "Text area",
      shortTitle: "Text"
    },
    {
      id: "STEP_TEXT_COLUMNS",
      title: "Text columns area",
      shortTitle: "Columns"
    }
  ],
  activeStep: "STEP_TEXT"
};

export const setActiveStep = (activeStep: StepId) => ({
  type: "SET_ACTIVE_STEP",
  activeStep
});

export default function reducer(state = INITIAL_STATE, data) {
  const { type } = data || {};

  switch (type) {
    case "SET_ACTIVE_STEP":
      return {
        ...state,
        activeStep: data.activeStep
      };
    default:
      return state;
  }
}

export const getActiveStep = createSelector(
  (state: State) => state[STATE_DIRECTORY].activeStep,
  (state: State) => state[STATE_DIRECTORY].list,
  (activeStep, list) => list.find(({ id }) => id === activeStep)
);

export const getStepsList = state => state[STATE_DIRECTORY].list;
