import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router-dom';
import App from './App';
import './index.css';

render(
  <App />,
  document.getElementById('root')
);