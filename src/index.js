import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ItemList from './components/ItemList';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementById('react-root'),
);
