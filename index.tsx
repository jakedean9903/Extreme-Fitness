import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Tailwind import handled via CDN in HTML for simplicity with this specific output requirement,
// but usually we import './index.css' here. 
// Since we are using CDN in index.html as per constraints to keep it simple with 
// the strict script loading, we proceed directly to rendering.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
