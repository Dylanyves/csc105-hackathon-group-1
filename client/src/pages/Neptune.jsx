import React from "react";
import NeptuneImage from "../assets/images/neptune.png";

function Neptune(props) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-[#002bAE] px-8 overflow-hidden">
            <div>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <div data-aos="zoom-in" className="max-w-6xl m-auto">
                <div className="min-h-screen pt-16">
                    <div className="flex items-center flex-col relative">
                        <img src={NeptuneImage} alt="" />
                        <h1 className="text-white font-semibold text-6xl sm:text-[6rem] absolute top-[40%] left-[50%] translate-x-[-50%] ease duration-200">
                            NEPTUNE
                        </h1>
                    </div>
                    <p className="text-white max-w-xl text-center m-auto mt-10">
                        <span className="font-semibold text-[#DBCC49] mr-1">
                            Neptune
                        </span>
                        is the eighth planet from the Sun and is known for its
                        striking blue appearance. It is an ice giant, with a
                        dynamic atmosphere filled with storms and high-speed
                        winds. Neptune has a diverse moon system and faint
                        rings. As one of the most distant planets in our solar
                        system, Neptune remains a captivating and mysterious
                        world.
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    className="min-h-[200vh] text-white mt-20 max-w-xl m-auto"
                >
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
                <h1>HEllo</h1>
            </div>
        </div>
    );
}

export default Neptune;
