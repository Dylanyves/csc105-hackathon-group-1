import React from "react";
import { Link } from "react-router-dom";

import BetaFish from "../assets/images/beta-fish.png";
import Neptune from "../assets/images/neptune.png";

function Home(props) {
    return (
        <div className="h-[450vh] bg-gradient-to-b from-black via-[#002bAE] to-black">
            <div className=" h-[150vh]">
                <h1 className="text-white relative top-10 right-0">
                    Something about <span>Blue</span>
                </h1>
                <div className="flex justify-between items-center border mt-20">
                    <img className="relative" src={Neptune} alt="" />
                    <div className="text-white">
                        <p className="mb-4 font-light ">From Neptune</p>
                        <Link to="/neptune">
                            <span className="px-8 py-2 border rounded-full hover:bg-white hover:text-black ease duration-200">
                                Explore
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-[150vh] border"></div>
            <div className="h-[150vh] border"></div>
        </div>
    );
}

export default Home;
