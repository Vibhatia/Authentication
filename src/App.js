// import logo from './logo.svg';
import './App.css';
import Captcha from "./Captcha.png"

function App() {
  return (
    <>
      <div className="container" >

        <div className="form">
          <h2>Login</h2>
          <div className="email" id="e">
            <label><h5>UserID</h5></label>
            <input type="email" cdplaceholder="Email"></input>
          </div>
          <div className="password">
            <label><h5>Password</h5></label>
            <input type="password" placeholder="Password" ></input>
            <br />

          </div>
          <div className="forgot" style={{ float: "right" }}>Forgot Password?</div>
          <div className="checkbox">
            {/* <input type="checkbox" />
            <div className="robot">I'm not robot
            </div>
            <img src={Captcha} alt="bjjb" style={{ width: "45px", height: "45px" }} /> */}
            <div class="g-recaptcha" data-sitekey="6Lfi7kIeAAAAABtdN1D_-Ir7IcYKZEBOJe0kEWZr"></div>

          </div>


          <div className="button">

            <button type="submit" style={{ margin: "0% 0% 5% 14%", }}>Login </button>
            <br />
            <button type="submit">Signin </button>


          </div>

        </div>

      </div>


    </>
  );
}

export default App;
