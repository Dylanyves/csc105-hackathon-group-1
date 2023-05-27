import React from "react";

import SkyImage from "../assets/images/sky.png";

function Sky(props) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#052A9A] to-[#BFDBF7]">
            <div className="">
                <div className="min-h-screen pt-16">
                    <div className="flex items-center flex-col relative">
                        <img className="w-full" src={SkyImage} alt="" />
                        <h1 className="text-white font-semibold text-6xl sm:text-[6rem] absolute top-[30%] left-[71%] translate-x-[-50%] ease duration-200">
                            SKY
                        </h1>
                    </div>
                    <p className="text-white max-w-xl text-center m-auto mt-10">
                        <span className="font-semibold text-[#DBCC49] mr-1">
                            The Sky,
                        </span>
                        an ever-changing and expansive realm above us, captures
                        our attention with its vibrant hues and celestial
                        wonders. From the radiant blues of day, adorned with
                        fluffy clouds, to the awe-inspiring canopy of stars that
                        emerges at night, it invites us to contemplate our place
                        in the universe. The sun's warm embrace illuminates the
                        world, while the moon and stars cast their gentle glow,
                        creating a tranquil ambiance. Clouds drift and
                        transform, adding a touch of whimsy to the canvas. The
                        sky, a constant reminder of our connection to nature,
                        inspires us to pause, appreciate its beauty, and find
                        solace in its infinite expanse.
                    </p>
                </div>
                <div className="text-white mt-20 max-w-xl m-auto">
                    <h3 className="text-2xl mb-4">Did you know?</h3>
                    <ul className="space-y-4">
                        <li className="bg-[#BFDBF7] bg-opacity-25 p-2 rounded-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis?
                        </li>
                        <li className="bg-[#BFDBF7] bg-opacity-25 p-2 rounded-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis?
                        </li>
                        <li className="bg-[#BFDBF7] bg-opacity-25 p-2 rounded-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis?
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sky;
