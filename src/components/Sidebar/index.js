import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CoursesActions } from "../../store/ducks/todos";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CoursesActions, dispatch);
// ({
//   toggleLesson: (module, lesson) =>
//     dispatch(CoursesActions.toggleLesson(module, lesson))
// });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
