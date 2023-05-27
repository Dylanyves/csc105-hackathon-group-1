import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Hero(props) {
    return (
        <div className="min-h-screen">
            <h1 className="uppercase text-5xl md:text-6xl text-white font-semibold text-center relative top-[15rem] px-8">
                Something about{" "}
                <span className="line-through text-[#DBCC49]">you</span>
                <span className="text-[#002bAE] block">Blue</span>
                <section id="section04" className="demo">
                    <Link
                        to="neptune"
                        smooth={true}
                        duration={500}
                        className="scroll-link"
                    >
                        <span></span>
                    </Link>
                </section>
            </h1>
        </div>
    );
}

export default Hero;
