import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Main from './main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

reportWebVitals();
