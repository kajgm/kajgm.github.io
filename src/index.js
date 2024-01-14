import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

import './static/css/index.css';

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}
