import React, { useState } from 'react';
import './signup.css';
import Axios from 'axios';
import Captcha from "./Captcha.png"

const Signup = () => {
 const url="";
  // const [data,setdata]=useState({
  //   name:"",
  //   roll:"",
  //   email:"",
  //   password:"",
  //   address:"",
  //   radio:"", 
  //   phn:"",
  //   branch:"",
  //   year:"",
  // })

  



  return <div>


    <div className="main">
      <h2 id="s"> Sign up</h2>
      <div class="flex-container">

        <div className="one">
          <div className="name">
            <input type="text" placeholder="Name" class="grey" />
          </div>
          <div className="number" >
            <input type="tel" placeholder="Roll no."class="grey"/>
          </div>
          <div className="branch">
            <select name="branch" id="branch"class="grey">
              <option value="..">Branch</option>
              <option value="CS">CS</option>
              <option value="CSE">CSE"</option>
              <option value="CSE(AI&ML)">CSE(AI&ML)</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <div className="email1">
            <input type="email" placeholder="Email" class="grey"/>
          </div>
          <div className="pass">
            <input type="password" placeholder="Password" class="grey"/>
          </div>
          <div className="address">
            <input type="text-box" placeholder="Address" class="grey"/>
          </div>


        </div>

        <div className="two">
          {/* <div className="name">
            <input type="text" placeholder="Year"/>
          </div> */}
          {/* <div className="number">
            <input type="number" />
          </div> */}
          <div className="year">
            <select name="year" id="branch"class="grey">
              <option value="..">Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="radio">
            Gender
            <input type="radio" id="male" name="fav_language" value="HTML" />
            <label for="html">Male</label>
            <input type="radio" id="female" name="fav_language" value="CSS" />
            <label for="css">Female</label>
          </div>
          <div className="tel">
            <input type="tel" placeholder="Contact no."class="grey" />
          </div>

          <div className="checkbox1">
            {/* <input type="checkbox" />
            <div className="robot">I'm not robot
            </div>
            <img src={Captcha} alt="bjjb" style={{ width: "50px", height: "45px" }} /> */}
<div class="g-recaptcha" data-sitekey="6Lfi7kIeAAAAABtdN1D_-Ir7IcYKZEBOJe0kEWZr"></div>
          </div>

        </div>

      </div>
      <div className="button1">

<button type="submit" style={{ margin: "0% 0% 5% 14%", }}>Signin </button>
    </div>
    
      
    </div>
    
  </div >;
};

export default Signup;
