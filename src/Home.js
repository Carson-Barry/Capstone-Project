import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { isSignedIn, getLogin } from "./LocalStorageInterface";

const Home = () => {

    const login = getLogin()

    return (
        <>
            {isSignedIn() ?  
                <div className="Home">
                    <h1 className="Home-welcome">Welcome to PC.cool, {`${login.firstName} ${login.lastName}`}</h1>
                </div>
            :
                <div className="Home">
                    <h1 className="Home-welcome">Welcome to PC.cool!</h1>
                    <Link className="Home-signup Home-button" to="/signup">Signup</Link>
                    <Link className="Home-login Home-button" to="/login">Login</Link>
                </div>
            }
        </>
    )
}

export default Home;