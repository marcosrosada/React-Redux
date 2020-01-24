import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  toggleLesson: ["module", "lesson"]
});

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: "React",
      lessons: [
        { id: 1, title: "Aula 1" },
        { id: 2, title: "Aula 2" }
      ]
    },
    {
      id: 2,
      title: "Redux",
      lessons: [
        { id: 3, title: "Aula 3" },
        { id: 4, title: "Aula 4" }
      ]
    }
  ]
};

const toggle = (state = INITIAL_STATE, action) => ({
  ...INITIAL_STATE,
  activeModule: action.module,
  activeLesson: action.lesson
});

export default createReducer(INITIAL_STATE, {
  [Types.TOGGLE_LESSON]: toggle
});
