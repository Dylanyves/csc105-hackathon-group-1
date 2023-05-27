import React from "react";

import NeptuneImage from "../assets/images/neptune.png";

function Neptune(props) {
    return (
        <div className="px-8">
            <div>
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
                            is the eighth planet from the Sun and is known for
                            its striking blue appearance. It is an ice giant,
                            with a dynamic atmosphere filled with storms and
                            high-speed winds. Neptune has a diverse moon system
                            and faint rings. As one of the most distant planets
                            in our solar system, Neptune remains a captivating
                            and mysterious world.
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        className="text-white mt-20 max-w-xl m-auto"
                    >
                        <h3 className="text-2xl mb-10">Did you know?</h3>
                        <ul className="space-y-8">
                            <li
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
                            >
                                It has a total of 14 known moons, with Triton
                                being the largest and most significant. Triton
                                is unique among large moons in our solar system
                                because it orbits in the opposite direction of
                                Neptune's rotation
                            </li>
                            <li
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:left-10"
                            >
                                The blue coloring is the result of methane in
                                the atmosphere, though the exact reason for the
                                vividness of the blue is still unknown.
                            </li>
                            <li
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="bg-[#BFDBF7] border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
                            >
                                Neptune was named after the Roman god of the sea
                                due to its blue appearance, reminiscent of the
                                deep ocean.
                            </li>
                        </ul>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="max-w-6xl m-auto mt-48"
                    >
                        <h3 className="text-2xl mb-4 text-white">
                            Future discoveries
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-0 md:gap-x-10 gap-y-10 justify-center items-center">
                            <div class="bg-opacity-20 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        class="rounded-t-lg"
                                        src="https://img.freepik.com/free-photo/nature-night-sky-stars-galaxy-aurora-generative-ai_188544-12466.jpg?w=2000"
                                        alt=""
                                    />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Noteworthy technology acquisitions
                                            2021
                                        </h5>
                                    </a>
                                    <p class="mb-3 font-normal text-white dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </div>
                            <div class="bg-opacity-20 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        class="rounded-t-lg"
                                        src="https://www.indy100.com/media-library/what-if-you-fell-into-neptune.jpg?id=29717791"
                                        alt=""
                                    />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Neptune’s dynamic atmosphere
                                        </h5>
                                    </a>
                                    <p class="mb-3 font-normal text-white dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </div>
                            <div class="bg-opacity-20 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img
                                        class="rounded-t-lg"
                                        src="https://i.ytimg.com/vi/qGy4uyHVUYA/maxresdefault.jpg"
                                        alt=""
                                    />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Triton’s Geology
                                        </h5>
                                    </a>
                                    <p class="mb-3 font-normal text-white dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Neptune;
