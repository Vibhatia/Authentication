// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [data,setdata]=useState({
    email:"",
    password:"",
  })
  function handle(e){
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata)
    console.log(newdata);
  }

  function login(e){

  e.preventDefault();
  Axios.post("https://registrationloginapi.herokuapp.com/api/users/login",{
    email:data.email,
    password:data.password,
  })
  .then(res => {
    console.log(res.data)
    navigate("/home");
  })
  .catch((error) =>{

      alert("Invalid Credentials!!")
  }
 )
}

  return (
    <>
      <div className="container" >

        <div className="form">
          <h2>Login</h2>
          <div className="email" id="e">
            <label><h5>UserID</h5></label>
            <input onChange={(e)=>handle(e)} id="email" value={data.email} type="email" placeholder="Email"></input>
          </div>
          <div className="password">
            <label><h5>Password</h5></label>
            <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" placeholder="Password" ></input>
            <br />

          </div>
          <div className="forgot" style={{ float: "right" }}><Link to={'/otp'}>Forgot Password?</Link></div>
          <div className="checkbox">
          
            <div class="g-recaptcha" data-sitekey="6Lfi7kIeAAAAABtdN1D_-Ir7IcYKZEBOJe0kEWZr"></div>

          </div>


          <div className="button">

            <button onClick={(e)=>login(e)} type="submit" style={{ margin: "0% 0% 5% 14%", }}>Login </button>
            <br />
            <button onClick={()=>{navigate("signup")}}type="submit">Signin </button>


          </div>

        </div>

      </div>


    </>
  );
}

export default App;
