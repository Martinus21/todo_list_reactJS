import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReduxState from './stores';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <ReduxState>
      <Router>
        <App />
      </Router>
    </ReduxState>
  </React.StrictMode>,
  document.getElementById('root')
);

