import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
