import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.css';
import "normalize.css/normalize.css";
import "./styles/styles.scss";



const jsx = (
    <HomePage />
);


ReactDOM.render(jsx, document.getElementById('app'));