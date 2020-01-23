import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from "./components/Sidebar";
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
            Teste
          </section>
        </div>
      </Provider>
    </div>
  );
}

export default App;
