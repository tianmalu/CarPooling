import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('login'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);