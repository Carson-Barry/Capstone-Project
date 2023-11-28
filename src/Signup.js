import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Signup.css"
import { signUp } from "./LoginAPI"
import { setLogin, isSignedIn } from "./LocalStorageInterface";

const Signup = () => {

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleClick = async (e) => {
        e.preventDefault()
        e.target.style.backgroundColor = "gray";
        e.target.style.color = "lightgray";
        e.target.disabled = true;
        e.target.value = "Loading...";

        if (formData.password !== "" && formData.email !== "" &&
            formData.firstName !== "" && formData.lastName !== "") {
            const signedIn = await signUp(formData)
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
            <div className="Signup">
                <h1 className="Signup-title">Sign Up</h1>
                <form className="Signup-form">
                    <input type="text" className="Signup-text" placeholder="first name" value={formData.firstName} name="firstName" onChange={handleChange}></input>
                    <input type="text" className="Signup-text" placeholder="last name" value={formData.lastName} name="lastName" onChange={handleChange}></input>
                    <input type="email" className="Signup-text" placeholder="email" value={formData.email} name="email" onChange={handleChange} autoComplete="email"></input>
                    <input type="password" className="Signup-text" placeholder="password" value={formData.password} name="password" onChange={handleChange} autoComplete="current-password"></input>
                    <input type="button" className="Signup-button" value="Submit" onClick={handleClick}></input>
                </form>
            </div>
        }
        </>
    );
}

export default Signup;