import React from 'react';
import './home.css';
// import logo from "./CSILOGO.png";
import logo from "./CSILOGO.png"

const Home = () => {
    return <div className="curve">
        <div className="wrapper">

            <nav class="nav">
                <ul >
                    <li><a href="index.html" target="_blank" ><img src={logo} alt="bjjb" style={{width:"45px",height:"50px"}}/></a></li>
                    <li><a href="ABOUT.html" target="_blank" >Home</a></li>
                    <li><a href="" >Dashboard</a></li>
                    <li><a href="" >Logout</a></li>

                </ul>
            </nav>
            <div className="home">
                <div className="welcome">
                    Welcome To Home Page
                </div>
                <div class="logo">
                    <span>Team CSI</span>
                </div>


            </div>




        </div>
        {/* <div className="white">

        </div> */}



    </div>;
};

export default Home;
