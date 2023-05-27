import React from "react";
import { Link } from "react-router-dom";

import Neptune from "./Neptune";
import Hero from "./Hero";
import Sky from "./Sky";
import Ocean from "./Ocean";

function Home(props) {
    return (
        <div className="bg-gradient-to-b from-black via-[#002bAE] to-black">
            <div>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <Hero />
            <Neptune />
            <Sky />
            <Ocean />
        </div>
    );
}

export default Home;
