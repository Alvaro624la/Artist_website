import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import App from './src/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);