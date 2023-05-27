import React from "react";

function Hero(props) {
    return (
        <div className="min-h-screen">
            <h1 className="uppercase text-5xl md:text-6xl text-white font-semibold text-center relative top-[15rem] px-8">
                Something about{" "}
                <span className="line-through text-[#DBCC49]">you</span>
                <span className="text-[#002bAE] block">Blue</span>
            </h1>
        </div>
    );
}

export default Hero;
