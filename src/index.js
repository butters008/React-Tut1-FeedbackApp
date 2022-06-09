import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { createRoot } from 'react-dom/client';

//This is the old way -  React 18 is something different
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
//     ,document.getElementById('root'));

//React 18 index and create and render root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)