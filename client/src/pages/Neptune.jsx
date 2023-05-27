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
                    className="min-h-[50vh] text-white mt-20 max-w-xl m-auto"
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
                <div className="min-h-screen-[200vh]">
                    <div
                        id="default-carousel"
                        class="relative w-full"
                        data-carousel="slide"
                    >
                        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div
                                class="hidden duration-700 ease-in-out relative"
                                data-carousel-item
                            >
                                <img
                                    className="absolute left-1/2 -translate-x-1/2"
                                    src={NeptuneMoon}
                                    alt=""
                                />
                            </div>
                            <div
                                class="hidden duration-700 ease-in-out relative"
                                data-carousel-item
                            >
                                <img src={NeptuneShip} alt="" />
                            </div>
                            <div
                                class="hidden duration-700 ease-in-out relative"
                                data-carousel-item
                            >
                                <img
                                    className="absolute left-1/2 -translate-x-1/2"
                                    src={NeptuneImage}
                                    alt=""
                                />
                            </div>
                            <div
                                class="hidden duration-700 ease-in-out relative"
                                data-carousel-item
                            >
                                <img
                                    className="absolute left-1/2 -translate-x-1/2"
                                    src={NeptuneImage}
                                    alt=""
                                />
                            </div>
                            <div
                                class="hidden duration-700 ease-in-out relative"
                                data-carousel-item
                            >
                                <img
                                    className="absolute left-1/2 -translate-x-1/2"
                                    src={NeptuneImage}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button
                                type="button"
                                class="w-3 h-3 rounded-full"
                                aria-current="true"
                                aria-label="Slide 1"
                                data-carousel-slide-to="0"
                            ></button>
                            <button
                                type="button"
                                class="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 2"
                                data-carousel-slide-to="1"
                            ></button>
                            <button
                                type="button"
                                class="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 3"
                                data-carousel-slide-to="2"
                            ></button>
                            <button
                                type="button"
                                class="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 4"
                                data-carousel-slide-to="3"
                            ></button>
                            <button
                                type="button"
                                class="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 5"
                                data-carousel-slide-to="4"
                            ></button>
                        </div>
                        <button
                            type="button"
                            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev
                        >
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 19l-7-7 7-7"
                                    ></path>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next
                        >
                            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Neptune;
