
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route, Router  } from 'react-router-dom';
import store from './app/store';
import { Provider} from 'react-redux';
//import { BrowserRouter as Router } from 'react-router-dom';
/*
   
*/

ReactDOM.render(

        <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
        </BrowserRouter>
    ,
    document.getElementById('root')
);