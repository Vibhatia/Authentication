import React, { useState } from 'react';
import Axios from 'axios';
import './otp.css';

const Otp = () => {
  const [data,setdata]=useState({
    mail:"",
    
  })
  function handle(e){
    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata)
    console.log(newdata);
  }

  function login(e){

  e.preventDefault();
  Axios.post("https://registrationloginapi.herokuapp.com/api/users/forgot-password",{
    email:data.mail,
    
  })
  .then(res => {
    console.log(res.data)
    
  })
}
  return <div>
      <div className="contain" >

<div className="otp">
    <h4 id='for'>Forgot Password</h4>
    <div className="content">  Your password has been sent to your registered e-mail id</div>
    
  <div className="username content">
      Enter Username <br/> 
      <input onChange={(e)=>handle(e)}  value={data.email} type="email" placeholder="Email" class="grey" id="mail"/>
      <div className="button">

<button onClick={(e)=>login(e)} type="submit" style={{ margin: "0% 0% 5% 10%", }}>Submit</button>
</div>
  </div>
 
  </div>;
  </div>
  </div>
};

export default Otp;
