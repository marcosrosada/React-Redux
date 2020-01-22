import { createStore } from 'redux';

function reducer() {
  return {
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
}
const store = createStore(reducer);

export default store;