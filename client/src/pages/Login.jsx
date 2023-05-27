import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

function Login(props) {
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

    return (
        <div className="max-w-sm m-auto pt-16">
            <h1 className="text-center text-xl mb-10">Login</h1>
            <form onSubmit={submitHandle} className="mb-10">
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            checked={remember}
                            onChange={() => setRemember(!remember)}
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        />
                    </div>
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Remember me
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </button>
            </form>
            <div className="text-center">
                <p className="text-sm">Don't have an account?</p>
                <span className="underline text-sm tracking-wide">
                    <Link to="/signup">Sign up</Link>
                </span>
            </div>
        </div>
    );
}

export default Login;
