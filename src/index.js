 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Signup from './Signup';
import Otp from './Otp';
// import Number from './Number'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/otp" element={<Otp/>}/>

    </Routes>
    </Router>
    {/* <Home/> */}
    {/* <Otp/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
