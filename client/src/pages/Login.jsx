import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Login({ login, setLogin, signup, setSignup }) {
    const username = useRef();
    const password = useRef();
    const [remember, setRemember] = useState(false);

    const submitHandle = (e) => {
        e.preventDefault();
        const usernameValue = username.current.value;
        const passwordValue = password.current.value;

        // If remember me set cache
        if (remember) {
            console.log("remember");
        } else {
            console.log("not remember");
        }
    };

    const toggle = () => {
        setLogin(false);
        setSignup(true);
    };

    return (
        <div className="">
            <div className="h-screen flex items-center justify-center">
                <div className="p-8 bg-gray-100 w-[400px]  rounded-2xl">
                    <h1 className="text-center text-xl mb-10 text-black">
                        Login
                    </h1>
                    <form onSubmit={submitHandle} className="mb-10">
                        <div className="mb-6 text-gray-50">
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-gray-50"
                            >
                                Your username
                            </label>
                            <input
                                ref={username}
                                type="text"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john123"
                                required
                            />
                        </div>
                        <div className="mb-6 text-gray-50">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-gray-50"
                            >
                                Your password
                            </label>
                            <input
                                ref={password}
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#496DDB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login
                        </button>
                    </form>
                    <div className="text-center">
                        <p className="text-sm text-black">
                            Don't have an account?
                            <span
                                onClick={toggle}
                                className="mx-2 text-[#496DDB] cursor-pointer"
                            >
                                Signup
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
