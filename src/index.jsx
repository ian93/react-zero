import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App appTitle="&lt; React App &gt;" />,
  document.getElementById('App'),
);

module.hot.accept();
