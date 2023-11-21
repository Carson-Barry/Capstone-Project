import React from "react";
import "./Signup.css"

const Signup = () => {

    return (
        <div className="Signup">
            <h1 className="Signup-title">Sign Up</h1>
            <form className="Signup-form">
                <input type="text" className="Signup-text" placeholder="first name"></input>
                <input type="text" className="Signup-text" placeholder="last name"></input>
                <input type="email" className="Signup-text" placeholder="email"></input>
                <input type="password" className="Signup-text" placeholder="password"></input>
                <input type="button" className="Signup-button" value="Submit"></input>
            </form>
        </div>
    );
}

export default Signup;