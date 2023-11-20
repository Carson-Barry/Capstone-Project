import React from "react";
import "./Home.css"
import { Link, redirect } from "react-router-dom";

const Home = () => {



    return (
        <div className="Home">
            <h1 className="Home-welcome">Welcome to PC.cool!</h1>
            <Link className="Home-signup Home-button" to="/hello">Signup</Link>
            <Link className="Home-login Home-button" to="/hello">Login</Link>
        </div>
    )
}

export default Home;