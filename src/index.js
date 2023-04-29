import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthUser } from './contexts/UserContext';
window.React = React;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthUser>
      <App />
    </AuthUser>
  </React.StrictMode>
);
