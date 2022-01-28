import React from 'react';
import './otp.css';

const Otp = () => {
  return <div>
      <div className="contain" >

<div className="otp">
    <h4 id='for'>Forgot Password</h4>
    <div className="content">  Your password has been sent to your registered mobile no. +91 XXXXXXXXXX</div>
  <div className="username content">
      Enter Username <br/> 
      <input type="email" placeholder="Email" class="grey" id="mail"/>
      <div className="button">

<button type="submit" style={{ margin: "0% 0% 5% 10%", }}>Submit</button>
</div>
  </div>
 
  </div>;
  </div>
  </div>
};

export default Otp;
