import React, { useState, useEffect } from "react";
import LoginButton from "../components/LoginButton";
import SigninButton from "../components/SigninButton";
import Login from "./Login";
import Signup from "./Signup";

import Axios from "../share/axios";

import Neptune from "./Neptune";
import Hero from "./Hero";
import Sky from "./Sky";
import Ocean from "./Ocean";

function Home(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);

    useEffect(() => {
        Axios.get("/me").then((res) => {
            if (res.data.success) {
                setIsLoggedIn(true);
            }
        });
    }, []);

    // useEffect(() => {
    //     console.log(hidden);
    // }, [hidden]);

    return (
        <div className="relative bg-gradient-to-b from-black via-[#002bAE] to-black">
            <div>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>

            <div className="absolute top-8 right-8">
                {!isLoggedIn ? (
                    <LoginButton
                        setLogin={setLogin}
                        login={login}
                        setSignup={setSignup}
                        signup={signup}
                    />
                ) : null}
            </div>
            {login ? (
                <Login
                    setLogin={setLogin}
                    login={login}
                    setSignup={setSignup}
                    signup={signup}
                />
            ) : null}
            {signup ? (
                <Signup
                    setLogin={setLogin}
                    login={login}
                    setSignup={setSignup}
                    signup={signup}
                />
            ) : null}

            <Hero />
            <Neptune />
            <div className="">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <Sky />
            <Ocean />
        </div>
    );
}

export default Home;
