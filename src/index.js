
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
/*
ReactDOM.render(
    <Router>
    <App />
    </Router>, 
    document.getElementById('root'));*/

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);