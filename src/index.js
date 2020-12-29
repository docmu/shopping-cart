import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const ITEMS = [
  {name: "apples", price: "1.00"},
  {name: "lychee", price: "2.50"},
  {name: "mango", price: "1.50"},
  {name: "watermelon", price: "5.00"},
];

ReactDOM.render(
  <React.StrictMode>
    <App items={ITEMS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
