import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddUser from './AddUser';
import reportWebVitals from './reportWebVitals';
import './common/common.css';
import FavCar from './FavCar';
import FavAnime from './FavAnime';
import Timer from './Timer';
import ShowUser from './ShowUser';
import Directory from './Directory';
import { BrowserRouter } from 'react-router-dom';
import Parent from './Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Directory></Directory>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
