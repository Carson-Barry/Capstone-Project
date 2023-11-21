import React from "react";
import "./Login.css"

const Login = () => {

    return (
        <div className="Login">
            <h1 className="Login-title">Log In</h1>
            <form className="Login-form">
                <input type="email" className="Login-text" placeholder="email"></input>
                <input type="password" className="Login-text" placeholder="password"></input>
                <input type="button" className="Login-button" value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;