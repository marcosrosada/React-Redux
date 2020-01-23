import React from 'react';

import { connect } from 'react-redux';

const Main = ({ activeModule, activeLesson }) => (
  <div>
    <h3>Módulo {activeModule.title}</h3>
    <p>Aula {activeLesson.title}</p>
  </div>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Main);
