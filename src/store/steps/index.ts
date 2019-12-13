import { createSelector } from "reselect";
import { State, StepId } from "./types";

const INITIAL_STATE: State = {
  list: [
    {
      id: "STEP_TEXT",
      title: "Text area",
      shortTitle: "Text area"
    },
    {
      id: "STEP_TEXT_COLUMNS",
      title: "Text columns area",
      shortTitle: "Columns area"
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
  (state: State) => state.activeStep,
  (state: State) => state.list,
  (activeStep, list) => list.find(({ id }) => id === activeStep)
);

export const getStepsList = (state: State) => state.list;
