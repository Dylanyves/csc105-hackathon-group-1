import React from "react";

import Cloud from "../assets/images/cloud.png";

import Sky1 from "../assets/images/skies/k1.jpg";
import Sky2 from "../assets/images/skies/k2.jpg";
import Sky3 from "../assets/images/skies/k3.jpg";
import Sky4 from "../assets/images/skies/k4.jpg";
import Sky5 from "../assets/images/skies/k5.jpg";
import Sky6 from "../assets/images/skies/k6.jpg";
import Sky7 from "../assets/images/skies/k7.jpg";
import Sky8 from "../assets/images/skies/k8.jpg";
import Sky9 from "../assets/images/skies/k9.jpg";
import Sky10 from "../assets/images/skies/k10.jpg";
import Sky11 from "../assets/images/skies/k11.jpg";
import Sky12 from "../assets/images/skies/k12.jpg";

function Sky(props) {
    return (
        <div className="px-8 mt-80">
            <div data-aos="zoom-in" data-aos-duration="1000" className="">
                <div className="relative">
                    <h2 className="text-white absolute -top-4 left-1/2 -translate-x-1/2 font-semibold text-6xl sm:text-[6rem]  ease duration-200">
                        SKY
                    </h2>
                    <img className="w-full" src={Cloud} alt="" />
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="m-auto max-w-4xl font-medium text-white text-2xl md:text-3xl xl:text-4xl italic"
                >
                    <q className="">
                        Beneath the <span className="text-[#DBCC49]">sky</span>,
                        we are but small beings, humbled by the vastness and
                        grandeur of the cosmos.
                    </q>
                </div>
            </div>

            {/* Gallery */}
            <div className="mt-48 max-w-4xl m-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky1}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky2}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky4}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky5}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky6}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky7}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky8}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky9}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky10}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky11}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg m-auto"
                                src={Sky12}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion */}
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="max-w-2xl m-auto mt-32"
            >
                <h3 className="text-white mb-8 text-2xl">
                    Something you might not know
                </h3>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="bg-white text-white bg-opacity-20 flex items-center justify-between w-full p-5 font-medium text-left order border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-graay-400 dark:hover:bg-gray-800"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span className="text-gray-200">
                                What is Rayleigh scattering?
                            </span>
                            <svg
                                data-accordion-icon
                                className="w-6 h-6 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-white dark:text-gray-400">
                                The sky appears blue during the day due to a
                                phenomenon called Rayleigh scattering, where
                                molecules in the Earth's atmosphere scatter
                                shorter-wavelength light, like blue and violet,
                                more than longer-wavelength light, like red and
                                orange.
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-2">
                        <button
                            type="button"
                            className="bg-white bg-opacity-20 flex items-center justify-between w-full p-5 font-medium text-left text-white order border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:tebg-gray-100 dark:hover:bg-gray-800"
                            data-accordion-target="#accordion-collapse-body-2"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-2"
                        >
                            <span className="text-gray-200">
                                What are noctilucent clouds?
                            </span>
                            <svg
                                data-accordion-icon
                                className="w-6 h-6 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-2"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-2"
                    >
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-white dark:text-gray-400">
                                The highest clouds in the Earth's atmosphere,
                                called noctilucent clouds, form at extremely
                                high altitudes near the poles during the summer
                                months. They are so high that they can still
                                catch sunlight even after the sun has set,
                                creating a mesmerizing glowing effect.
                            </p>
                        </div>
                    </div>
                    <h2 id="accordion-collapse-heading-3">
                        <button
                            type="button"
                            className="bg-white bg-opacity-20 flex items-center justify-between w-full p-5 font-medium text-left text-white order border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"
                            data-accordion-target="#accordion-collapse-body-3"
                            aria-expanded="false"
                            aria-controls="accordion-collapse-body-3"
                        >
                            <span className="text-gray-200">
                                What is an Airglow?
                            </span>
                            <svg
                                data-accordion-icon
                                className="w-6 h-6 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-3"
                        className="hidden"
                        aria-labelledby="accordion-collapse-heading-3"
                    >
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-white dark:text-gray-400">
                                The sky is not completely dark even at night.
                                Even in the absence of the Moon and light
                                pollution, the night sky still exhibits a faint
                                glow known as "airglow." Airglow is caused by
                                various chemical reactions and emissions in the
                                upper atmosphere.
                            </p>

                            <p className="mb-2 text-white dark:text-gray-400">
                                Learn more about these technologies:
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="max-w-2xl m-auto mt-24 flex justify-center flex-col items-center">
                <p className="text-white font-light text-center">
                    Link to download skylight difference dataset
                </p>
                <button className="mt-6 text-white border-[1.5px] block px-8 py-3 text-sm md:text-base rounded-full hover:bg-gray-100 hover:text-black ease duration-200">
                    Download data
                </button>
            </div>
        </div>
    );
}

export default Sky;
