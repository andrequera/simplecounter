import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "jquery"
import "popper.js"

let hora0=0;
let hora1=0;
let min0=0;
let min1=0;
let seg0=0;
let seg1=0;

let contador = setInterval(()=>
{
  seg0++;
  ReactDOM.render(<App segundo0={seg0} segundo1={seg1} minuto0={min0} minuto1={min1} Hora0={hora0} Hora1={hora1}/>, document.getElementById('root')
)
if (seg0===9){
  seg0=0;
  seg1++;
}

if (seg1===6){
  seg1=0;
  min0++;
}

if (min0===9){
  min0=0;
  min1++;
}

if (min1===6){
  min1=0;
  min1++;
}

if (hora0===4){
  hora0=0;
  hora1++;
}

if (hora1===2){
  hora1=0;
  clearInterval(contador);
}

}, 1);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
