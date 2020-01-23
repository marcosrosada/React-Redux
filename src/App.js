import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import store from "./store";

import './index.css';

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
        <div className="flex-grid">
          <aside className="col sidebar">
            <Sidebar />
          </aside>
          <section className="col main">
            <Main />
          </section>
        </div>
      </Provider>
    </div>
  );
}

export default App;
