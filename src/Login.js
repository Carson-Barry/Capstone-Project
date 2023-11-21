import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css"
import { signIn } from "./LoginAPI"
import { setLogin, isSignedIn } from "./LocalStorageInterface";

const Login = () => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleClick = async (e) => {
        e.preventDefault()
        e.target.style.backgroundColor = "gray";
        e.target.style.color = "lightgray";
        e.target.disabled = true;
        e.target.value = "Loading...";

        if (formData.password !== "" && formData.email !== "") {
            const signedIn = await signIn(formData)
            if (signedIn !== false) {
                setLogin(signedIn)
                window.location.href = "/";
            }
        }
        e.target.style.backgroundColor = null;
        e.target.style.color = null;
        e.target.disabled = false;
        e.target.value = "Submit";
    }

    return (
        <>
        {isSignedIn() ? <Navigate to="/"/> :             
            <div className="Login">
                <h1 className="Login-title">Log In</h1>
                <form className="Login-form">
                    <input type="email" className="Login-text" placeholder="email" value={formData.email} name="email" onChange={handleChange} autoComplete="email"></input>
                    <input type="password" className="Login-text" placeholder="password" value={formData.password} name="password" onChange={handleChange} autoComplete="current-password"></input>
                    <input type="button" className="Login-button" value="Submit" onClick={handleClick}></input>
                </form>
            </div>
        }
        </>
    );
}

export default Login;