import React from "react";

import NeptuneImage from "../assets/images/neptune.png";

function Neptune(props) {
    return (
        <div id="neptune" className="px-8 py-20">
            <div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="max-w-6xl m-auto"
                >
                    <div className="min-h-screen">
                        <div className="flex items-center flex-col relative">
                            <img src={NeptuneImage} alt="" />
                            <h2 className="text-white font-semibold text-6xl sm:text-[6rem] absolute top-[40%] left-[50%] translate-x-[-50%] ease duration-200">
                                NEPTUNE
                            </h2>
                        </div>
                        <p className="text-white max-w-2xl lg:text-lg text-center m-auto mt-10 font-light">
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

                    {/* Lists */}
                    <div
                        data-aos="fade-up"
                        className="text-white mt-20 max-w-xl m-auto"
                    >
                        <h3 className="text-2xl mb-10">Did you know?</h3>
                        <ul className="space-y-8">
                            <li
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="bg-[#BFDBF7] lg:text-lg border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
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
                                className="bg-[#BFDBF7] lg:text-lg border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:left-10"
                            >
                                The blue coloring is the result of methane in
                                the atmosphere, though the exact reason for the
                                vividness of the blue is still unknown.
                            </li>
                            <li
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="bg-[#BFDBF7] lg:text-lg border-l-8 border-[#DBCC49] bg-opacity-25 p-3 font-light rounded-sm relative md:-left-10"
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
                        className="max-w-6xl m-auto mt-32"
                    >
                        <h3 className="text-2xl mb-8 text-white text-center">
                            Future discoveries
                        </h3>

                        {/* Cards */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-0 md:gap-x-10 gap-y-10 justify-between items-center"
                        >
                            <div className="bg-opacity-20 hover:bg-opacity-40 ease duration-200 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://img.freepik.com/free-photo/nature-night-sky-stars-galaxy-aurora-generative-ai_188544-12466.jpg?w=2000"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Magnetic fields and auroras
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        Neptune exhibits a robust magnetic field
                                        and captivating aurora that is
                                        generated.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-opacity-20 hover:bg-opacity-40 ease duration-200 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://www.indy100.com/media-library/what-if-you-fell-into-neptune.jpg?id=29717791"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Neptune’s dynamic atmosphere
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        Neptune features a strong magnetic field
                                        and stunning auroras, generated by an
                                        internal dynamo.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-opacity-20 hover:bg-opacity-30 ease duration-200 max-w-sm bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src="https://i.ytimg.com/vi/qGy4uyHVUYA/maxresdefault.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                                            Triton’s Geology
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        Triton, Neptune's largest moon, reveals
                                        a complex geological history with
                                        tectonic activity, icy eruptions, and
                                        the potential for a subsurface ocean.
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
