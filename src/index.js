import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React bootstrap
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


