import React from "react";
import Axios from "../share/axios";
import { useCookies } from "react-cookie";

import Swal from "sweetalert2";

function Supernova({ setIsLoggedIn }) {
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleClick = () => {
        const user = JSON.parse(localStorage.getItem("user")).username;

        Axios.post("/getUserId", { username: user }).then((res) => {
            console.log(res.data.data.userId);
            Axios.delete("/delete", {
                data: { userId: res.data.data.userId },
            }).then((res1) => {
                Swal.fire("Dead");
                Object.keys(cookies).forEach((cookieName) => {
                    removeCookie(cookieName);
                });
                localStorage.clear();
                setIsLoggedIn(false);
            });
        });
    };
    return (
        <div>
            <div className="relative">
                <div
                    onClick={handleClick}
                    className="text-sm text-red-500 border border-red-500 px-4 py-1 lg:text-base lg:px-5 lg:py-2 rounded-full cursor-pointer hover:text-white hover:bg-red-600 ease duration-200"
                >
                    Supernova
                </div>
                <div className="text-xs mt-2 text-white font-light text-center absolute w-40 left-[-25%]">
                    Don't click this or you will regret
                </div>
            </div>
        </div>
    );
}

export default Supernova;
