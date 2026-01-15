import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Rendering the application into the 'root' div found in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);