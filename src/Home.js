import React, { useState } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { isSignedIn, getLogin, getUserBuild, saveUserBuild } from "./LocalStorageInterface";
import ProductStrips from "./ProductStrips";
import BuildStrip from "./BuildStrip";

const Home = () => {

    const login = getLogin();
    const [userBuild, setUserBuild] = useState(getUserBuild());
    
    const setUserBuildComponent = (newComponent) => {
        const newUserBuild = [];
        for (let userComponent of userBuild) {
            if (userComponent.identifier === newComponent.identifier) {
                newUserBuild.push(newComponent);
            }
            else {
                newUserBuild.push(userComponent);
            }
            setUserBuild(newUserBuild);
        }
        saveUserBuild(newUserBuild);
    }

    return (
        <>
            {isSignedIn() ?  
                <div className="Home">
                    <h1 className="Home-welcome">Welcome to PC.cool, {`${login.firstName} ${login.lastName}`}</h1>
                    <div className="Home-build-menu">
                        <h2 className="Home-build-menu-heading">Current PC Build:</h2>
                        <BuildStrip userBuild={userBuild} productOnClick={setUserBuildComponent}/>
                        <h2 className="Home-build-menu-heading">Choose your components!</h2>
                        <ProductStrips productOnClick={setUserBuildComponent}/>
                    </div>
                </div>
            :
                <div className="Home">
                    <h1 className="Home-welcome">Welcome to PC.cool!</h1>
                    <div className="Home-buttons">
                        <Link className="Home-signup Home-button" to="/signup">Signup</Link>
                        <Link className="Home-login Home-button" to="/login">Login</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Home;