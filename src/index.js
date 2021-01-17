import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './pages/register'
import Home from './pages/home'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
