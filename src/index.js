import React from 'react';
import ReactDOM from 'react-dom';

import ItemList from './components/ItemList';

ReactDOM.render(
  <div>
    <h1>Hello, from react-dom</h1>
    <ItemList />
  </div>,
  document.getElementById('react-root'),
);
