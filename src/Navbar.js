import React from "react";
import "./Navbar.css";
import { isSignedIn, setLogin } from "./LocalStorageInterface";

const Navbar = () => {
    
    const logOut = () => {
        setLogin(null);
        window.location.href = "/"
    }

    const goToProfile = () => {
        window.location.href = "/profile"
    }

    return (
        <div className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-left">
                    <h1 className="Navbar-title"><a href="/" className="Navbar-link">PC.cool</a></h1>
                </div>
                <div className="Navbar-right">
                    {isSignedIn() ?
                    <>
                        <input type="button" className="Navbar-button" value="Profile" onClick={goToProfile}></input>
                        <input type="button" className="Navbar-button" value="Log Out" onClick={logOut}></input>
                    </> : null}
                </div>
            </div>
            <hr className="Navbar-hr"></hr>
        </div>
    )
}

export default Navbar;