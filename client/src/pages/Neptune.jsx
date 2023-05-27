import React from "react";

import NeptuneImage from "../assets/images/neptune.png";
import NeptuneMoon from "../assets/images/neptune-moon.png";
import NeptuneShip from "../assets/images/space-ship.png";

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
                    <p className="text-white max-w-xl text-center m-auto mt-10 font-light">
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
                    className="min-h-[50vh] text-white mt-20 max-w-xl m-auto"
                >
                    <h3 className="text-2xl mb-10">Did you know?</h3>
                    <ul className="space-y-8">
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
                        >
                            It has a total of 14 known moons, with Triton being
                            the largest and most significant. Triton is unique
                            among large moons in our solar system because it
                            orbits in the opposite direction of Neptune's
                            rotation
                        </li>
                        <li
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:left-10"
                        >
                            The blue coloring is the result of methane in the
                            atmosphere, though the exact reason for the
                            vividness of the blue is still unknown.
                        </li>
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
                        >
                            Neptune was named after the Roman god of the sea due
                            to its blue appearance, reminiscent of the deep
                            ocean.
                        </li>
                    </ul>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="min-h-[125vh] max-w-xl m-auto mt-48"
                >
                    <h3 className="text-2xl mb-4 text-white">
                        Future discoveries
                    </h3>
                    <div>
                        <a
                            href="#"
                            class=" flex flex-col items-center bg-opacity-80 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src="/docs/images/blog/image-4.jpg"
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Neptune;
