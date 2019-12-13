export type StepId = "STEP_TEXT" | "STEP_TEXT_COLUMNS";

export type Step = {
  id: StepId;
  title: string;
  shortTitle: string;
};

export type List = Step[];

export interface State {
  list: List;
  activeStep: StepId;
}
