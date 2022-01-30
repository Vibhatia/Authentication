import React from 'react';
import './number.css'
const Number = () => {
  return (<>
      <body>
          <div className="cover">
              <div className="">
                  <h1 className="title">OTP Verification</h1>
                  <p>Enter the OTP sent to +91 XXXXXXXXXX</p>
              </div>
              <form action="
              ">
                  <div className="rid">
                      
                <div>  <input type="text"  name="otp" maxlength="6"  pattern="\d{6}" required/></div>
                {/* <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> */}
                {/* <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> */}
                {/* <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>  */}
                  </div>
                  <div className="submiit">
                          <input type="submit" value='Redirect to Login Page'/>

                  </div>
              </form>
          </div>
      </body>
  </>);
};

export default Number;