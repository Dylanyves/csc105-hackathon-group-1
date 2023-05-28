import React, { useState, useRef } from "react";

import Axios from "../share/axios";

function LoginButton({ setLogin, login, signup, setSignup }) {
    const toggle = () => {
        setLogin(!login);
        setSignup(false);
    };
    return (
        <>
            <div className="relative">
                <div
                    onClick={toggle}
                    className="text-sm text-white border px-4 py-1 lg:text-base lg:px-5 lg:py-2 rounded-full cursor-pointer hover:text-black hover:bg-white ease duration-200"
                >
                    Login
                </div>
            </div>
        </>
    );
}

export default LoginButton;
