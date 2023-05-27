import React from "react";
import { Link } from "react-router-dom";

import BetaFish from "../assets/images/beta-fish.png";
import Neptune from "./Neptune";
import Hero from "./Hero";
import Sky from "./Sky";

function Home(props) {
    return (
        <div className="bg-gradient-to-b from-black to-[#002bAE]">
            <div>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <Hero />
            <Neptune />
            <Sky />


    </div>
  );
}

export default Home;
