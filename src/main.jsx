import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {io} from "socket.io-client";
import {StudentsApi} from "../gen/src/index.js";

const socket = io('http://localhost:3000');
export const StudentsClient = new StudentsApi();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket}/>
  </React.StrictMode>,
)
