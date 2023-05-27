import React from "react";
import OceanImage from "../assets/images/bottom.png";

function Ocean(props) {
    return (
        <div className="min-h-screen">
            <div>
                <img
                    className="relative bottom-0 left-0 w-full"
                    src={OceanImage}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Ocean;
