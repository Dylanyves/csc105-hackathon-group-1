import React from "react";

import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <nav className="w-full px-6 bg-white flex justify-between items-center py-4 border">
                <span>BettaCore</span>
                <Link to="/login">
                    <span className="block py-2 px-5 cursor-pointer border rounded-full border-gray-900 hover:bg-gray-900 hover:text-white hover:border-none ease duration-200">
                        Login
                    </span>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
