import React from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

function LogoutButton({ setIsLoggedIn }) {
    const [cookies, setCookie, removeCookie] = useCookies();

    const logout = () => {
        Object.keys(cookies).forEach((cookieName) => {
            Swal.fire("Logged out");
            removeCookie(cookieName);
            setIsLoggedIn(false);
        });
    };

    return (
        <div>
            <div className="relative">
                <div
                    onClick={logout}
                    className="text-sm text-white border px-4 py-1 lg:text-base lg:px-5 lg:py-2 rounded-full cursor-pointer hover:text-black hover:bg-white ease duration-200"
                >
                    Logout
                </div>
            </div>
        </div>
    );
}

export default LogoutButton;
