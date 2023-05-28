import React, { useRef } from "react";
import Axios from "../share/axios";
import Swal from "sweetalert2";

function Signup({ setLogin, setSignup }) {
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const submitHandle = (e) => {
        e.preventDefault();
        const usernameValue = username.current.value;
        const passwordValue = password.current.value;
        const confirmPasswordValue = confirmPassword.current.value;

        if (passwordValue !== confirmPasswordValue) {
            Swal.fire("Password doesn't match");
        } else {
            Axios.post("/signup", {
                username: usernameValue,
                password: passwordValue,
            }).then((res) => {
                if (res.data.success) {
                    Swal.fire("Success");
                    closeForm();
                    localStorage.setItem(
                        "user",
                        JSON.stringify({
                            username: usernameValue,
                        })
                    );
                } else {
                    Swal.fire(res.data.message);
                }
            });
        }
    };

    const toggle = () => {
        setLogin(true);
        setSignup(false);
    };

    const closeForm = () => {
        setLogin(false);
        setSignup(false);
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="relative py-10 px-8 bg-gray-100 w-[400px]  rounded-2xl">
                <button
                    className="absolute top-4 right-4 text-black"
                    onClick={closeForm}
                >
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>
                <h1 className="text-center text-xl mb-10 text-black">Signup</h1>
                <form onSubmit={submitHandle} className="mb-10">
                    <div className="mb-6">
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your username
                        </label>
                        <input
                            ref={username}
                            type="text"
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="john123"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password
                        </label>
                        <input
                            ref={password}
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="confirm-password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Confirm password
                        </label>
                        <input
                            ref={confirmPassword}
                            type="password"
                            id="confirm-password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-[#496DDB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Signup
                    </button>
                </form>
                <div className="text-center">
                    <p className="text-sm text-black">
                        Don't have an account?
                        <span
                            onClick={toggle}
                            className="mx-2 text-[#496DDB] cursor-pointer"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
