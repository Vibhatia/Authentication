import React, {useEffect} from 'react';

// import {useNavigate} from "react-router-dom";
import './number.css'
const Number = () => {
    useEffect ( ()=> {
        alert("OTP has been sent successfully!!!")
    } , [] )

  return (<>
          <div className="cover">
              <div className="">
                  <h1 className="title">OTP Verification</h1>
                  <p>Enter the OTP sent to +91 XXXXXXXXXX</p>
              </div>
              <form action="
              ">
                  <div className="rid">
                      
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                 <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> 
                 <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> 
                 <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>  
                 <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>  
                 <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>  
                  </div>
                  <div className="submiit">
                          <input type="submit" value='Submit'/>

                  </div>
              </form>
          </div>
      
  </>);
};

export default Number;