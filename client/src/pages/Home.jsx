import React, { useState, useEffect } from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Supernova from "../components/Supernova";
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
        Axios.get("/me", { withCredentials: true }).then((res) => {
            if (res.data.success) {
                setIsLoggedIn(true);
            }
        });
    }, []);

    const loggedInComponent = () => {
        return (
            <div className="flex gap-x-4">
                <Supernova setIsLoggedIn={setIsLoggedIn} />
                <LogoutButton setIsLoggedIn={setIsLoggedIn} />
            </div>
        );
    };

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
                ) : (
                    loggedInComponent()
                )}
            </div>
            {login ? (
                <Login
                    setLogin={setLogin}
                    login={login}
                    setSignup={setSignup}
                    signup={signup}
                    setIsLoggedIn={setIsLoggedIn}
                />
            ) : null}
            {signup ? (
                <Signup
                    setLogin={setLogin}
                    login={login}
                    setSignup={setSignup}
                    signup={signup}
                    setIsLoggedIn={setIsLoggedIn}
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
