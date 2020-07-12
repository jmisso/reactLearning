import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from "./components/MyInfo"

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."

