import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from "./components/Sidebar";
import store from "./store";

import './index.css';

function App() {
  return (
    <div className="App" class="container">
      <Provider store={store}>
        <div class="flex-grid">
          <aside class="col sidebar">
            <Sidebar />
          </aside>
          <section class="col main">
            Teste
          </section>
        </div>
      </Provider>
    </div>
  );
}

export default App;
