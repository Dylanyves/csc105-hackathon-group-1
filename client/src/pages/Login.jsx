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
        <div>
            <div className="h-screen flex items-center justify-center">
                <div className="p-8 bg-gray-100 w-[400px] bg-[#22223B] rounded-2xl">
                    <h1 className="text-center text-xl mb-10 text-gray-50">
                        Welcome
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
                        <p className="text-sm text-gray-50">
                            Don't have an account?{" "}
                            <Link
                                className="text-[#496DDB] underline text-sm tracking-wide text-gray-50"
                                to="/signup"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
