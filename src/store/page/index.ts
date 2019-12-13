import { State, Title } from "./types";

const INITIAL_STATE: State = {
  title: "React coding task «Text Layout»"
};

export const setTitle = (title: Title) => ({
  type: "SET_TITLE",
  title
});

export default function reducer(state = INITIAL_STATE, data) {
  const { type } = data || {};

  switch (type) {
    case "SET_TITLE":
      return {
        ...state,
        title: data.title
      };
    default:
      return state;
  }
}

export const getTitle = (state: State) => state.title;
