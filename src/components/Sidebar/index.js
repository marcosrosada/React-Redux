import React, { Component } from 'react';

// import { Container } from './styles';

export default class Sidebar extends Component {
  state = {
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
  render() {
    const { modules } = this.state;

    return (
      <aside>
        {modules.map(module => (
          <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}
