import React from 'react';
import ReactDOM from 'react-dom';
// * Components
import Home from './templates/Home';
// * Css
import './styles/global-styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
