import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <div className="min-h-screen bg-black  text-white">
            <div className="relative top-[30%] ">
                <h1 className="text-7xl font-semibold">404</h1>
                <p>
                    The page you're looking for doesn't exist. Go back to{" "}
                    <Link to="/">
                        <span className="text-[#DBCC49]">Home</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default NotFound;
