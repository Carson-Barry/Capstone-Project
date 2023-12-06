import React, { useState } from "react";
import { useEffect } from "react";
import { getLogin, setLogin } from "./LocalStorageInterface";
import "./Profile.css"

const Profile = () => {
   
    const [loginData, setLoginData] = useState(null);

    useEffect(() => {
        const getLoginData = async () => {
            const data = await getLogin();
            setLoginData(data);
        }
        getLoginData()
    }, [])

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value 
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        const saveLoginData = async () => {
            await setLogin(loginData);
        }
        saveLoginData();
        window.location.href = "/profile"
    }

    return (
        <div className="Profile">
            {loginData ?
            <>
                <h1 className="Profile-title">Hello, {loginData.firstName}</h1>
                <form className="Profile-form">
                    <div className="Profile-formDiv">
                        <label className="Profile-label" htmlFor="firstName">First Name</label>
                        <input type="text" className="Profile-text" id="firstName" value={loginData.firstName} onChange={handleChange}></input>
                    </div>
                    <div className="Profile-formDiv">
                        <label className="Profile-label" htmlFor="lastName">Last Name</label>
                        <input type="text" className="Profile-text" id="lastName" value={loginData.lastName} onChange={handleChange}></input>
                    </div>
                    <div className="Profile-formDiv">
                        <label className="Profile-label" htmlFor="email">Email</label>
                        <input type="email" className="Profile-text" id="email" value={loginData.email} onChange={handleChange}></input>
                    </div>
                    <div className="Profile-formDiv">
                        <label className="Profile-label" htmlFor="password">Password</label>
                        <input type="password" className="Profile-text" id="password" value={loginData.password} autoComplete="none" onChange={handleChange}></input>
                    </div>
                    <input type="button" className="Profile-button" value="Save" onClick={handleClick}></input>
                </form>
            </>
            :
            <h1 className="Profile-title">Loading...</h1>}
        </div>
    )
}

export default Profile;