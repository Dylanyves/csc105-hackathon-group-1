import React from "react";
import OceanImage from "../assets/images/bottom.png";

import Shark from "../assets/images/ocean/shark.png";
import Penguin from "../assets/images/ocean/penguin.png";
import Sealion from "../assets/images/ocean/sealion.png";
import Manatee from "../assets/images/ocean/manachi.png";
import Turtle from "../assets/images/ocean/turtle.png";
import Swal from "sweetalert2";

import Axios from "../share/axios";

function Ocean(props) {
    const downloadData = () => {
        Axios.get("/me", { withCredentials: true }).then((res) => {
            if (res.data.success) {
                Axios.post("/download", {
                    fileName: "ocean_temp.csv",
                }).then((res) => {
                    Swal.fire("Download successful");
                    window.open(res.data.url, "_blank", "noreferrer");
                });
            } else {
                Swal.fire("You must login first");
            }
        });
    };

    return (
        <div className="mt-80 relative">
            <div data-aos="flip-right" data-aos-duration="1000" className="">
                <h2 className="text-white relative text-center mb-32 font-semibold text-6xl sm:text-[6rem] ease duration-200">
                    OCEAN
                </h2>
            </div>
            <ul className="max-w-3xl m-auto text-white flex flex-wrap items-center justify-center gap-14 text-center px-8">
                <li data-aos="zoom-out-right" data-aos-duration="1000">
                    <p className="text-3xl text-[#DBCC49] sm:text-4xl xl:text-5xl font-semibold">
                        230,000
                    </p>
                    <p className="text-sm mt-1">Known species</p>
                </li>
                <li data-aos="zoom-out-up" data-aos-duration="1000">
                    <p className="text-3xl text-[#DBCC49] sm:text-4xl xl:text-5xl font-semibold">
                        250,000 <span className="text-xs font-light">tons</span>
                    </p>
                    <p className="text-sm mt-1">Plastics in the ocean</p>
                </li>
                <li data-aos="zoom-out-left" data-aos-duration="1000">
                    <p className="text-3xl text-[#DBCC49] sm:text-4xl xl:text-5xl font-semibold">
                        3800 <span className="text-xs font-light">m</span>
                    </p>
                    <p className="text-sm mt-1">Average ocean depth</p>
                </li>
            </ul>

            {/* Carousel */}
            <div className="mt-32 max-w-5xl m-auto px-8">
                <h3 className="text-white text-xl md:text-2xl mb-24 text-center">
                    Endagered Sea Creatures
                </h3>
                <div
                    id="animation-carousel"
                    className="relative w-full"
                    data-carousel="static"
                >
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div
                            className="hidden duration-200 ease-linear"
                            data-carousel-item
                        >
                            <img
                                src={Shark}
                                className="absolute block w-[40%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        <div
                            className="hidden duration-200 ease-linear"
                            data-carousel-item
                        >
                            <img
                                src={Manatee}
                                className="absolute block w-[45%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        <div
                            className="hidden duration-200 ease-linear"
                            data-carousel-item="active"
                        >
                            <img
                                src={Turtle}
                                className="absolute block w-[40%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        <div
                            className="hidden duration-200 ease-linear"
                            data-carousel-item
                        >
                            <img
                                src={Penguin}
                                className="absolute block w-[30%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        <div
                            className="hidden duration-200 ease-linear"
                            data-carousel-item
                        >
                            <img
                                src={Sealion}
                                className="absolute block w-[30%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Ocean issues */}
            <div className="max-w-6xl m-auto mt-32 px-8 z-10">
                <h3 className="text-white text-2xl text-center mb-20">
                    Ocean Issues
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-y-12 gap-x-12">
                    <div className=" text-center max-w-lg text-white px-2">
                        <i className="fa-solid fa-temperature-arrow-up text-[#DBCC49] text-2xl mb-4"></i>
                        <p className="font-light">
                            Climate change and pollution contribute to ocean
                            deoxygenation, resulting in oxygen-deprived zones
                            known as "dead zones." These areas have low oxygen
                            levels, causing harm to marine life and disrupting
                            ecosystems.
                        </p>
                    </div>
                    <div className=" text-center max-w-lg text-white px-2">
                        <i className="fa-solid fa-oil-well text-[#DBCC49] text-2xl mb-4"></i>
                        <p className="font-light">
                            Oil spills in the ocean have devastating effects on
                            marine ecosystems. A single large oil spill can harm
                            or kill marine life, damage habitats, contaminate
                            water, and have long-term ecological and economic
                            consequences.
                        </p>
                    </div>
                    <div className=" text-center max-w-lg text-white px-2">
                        <i className="fa-solid fa-sun text-[#DBCC49] text-2xl mb-4"></i>
                        <p className="font-light">
                            The ocean absorbs much of the heat from climate
                            change, leading to increased ocean temperatures.
                            Warmer waters can affect the distribution and
                            abundance of marine species, disrupt ecosystems, and
                            impact fisheries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="z-10 max-w-2xl m-auto mt-48 flex justify-center flex-col items-center px-8">
                <p className="text-white font-light text-center">
                    Ocean oil spill dataset
                </p>
                <button
                    onClick={downloadData}
                    className="z-10 cursor-pointer mt-6 text-white border-[1.5px] block px-8 py-3 text-sm md:text-base rounded-full hover:bg-gray-100 hover:text-black ease duration-200"
                >
                    Download data
                </button>
            </div>

            <div className="min-h-[75vh]">
                <div>
                    <img
                        className="absolute bottom-0 left-0 w-full"
                        src={OceanImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Ocean;
