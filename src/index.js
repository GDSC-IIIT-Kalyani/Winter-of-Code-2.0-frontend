import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Text from './components/UI/frontText/Text.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// Front Parralax rendering
ReactDOM.render(
  <>
    <BrowserRouter>
      <Route path='/' exact>
        <Text />
      </Route>
    </BrowserRouter>
  </>,
  document.getElementById('home-root')
);
