import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <div className="relative min-h-screen bg-black  text-white">
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 text-center">
                <h1 className="text-7xl font-semibold">404</h1>
                <p>
                    The page you're looking for doesn't exist. Go back to
                    <Link to="/">
                        <span className="text-[#DBCC49] hover:text-[#ccbe42] ease duration-200 mx-2">
                            Home
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
