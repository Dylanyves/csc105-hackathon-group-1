import React from "react";
import { Link } from "react-router-dom";

import Clouds from "../assets/images/clouds.png";
import Neptune from "../assets/images/neptune.png";
import Stars from "../assets/images/stars.jpg";
import Rocky from "../assets/images/rocky.png";

function Home(props) {
  return (
    <div className="h-[230vh] bg-gradient-to-b from-black via-[#002bAE] to-black">
      <div className="pt-[10px]">
        <img
          class="h-[300px] w-full absolute object-cover"
          src={Stars}
          alt="image description"
        />

        <h1 className="text-white relative top-10 flex justify-center items-center text-2xl">
          Something about <span className="ml-2 text-blue-400">Blue</span>
        </h1>

        <div className="grid grid-cols-2 mt-20">
          <div className="w-[300%] left-[-330px] relative">
            <img src={Neptune} alt="" />
          </div>
          <div className="text-white top-[40%] relative ">
            <div className="absolute md:left-[50%] left-[25%]">
              <p className="pl-[4px] mb-4 font-light text-xl">From Neptune</p>
              <div className="pt-[5px] ">
                <Link to="/neptune">
                  <span className="px-8 py-2 border rounded-full hover:bg-white hover:text-black ease duration-200">
                    Explore
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 mt-[90px]">
          <div className="text-white relative ">
            <div className="absolute md:left-[50%] left-[15%]">
              <p className="pl-[4px] mb-4 font-light text-xl">to the sky</p>
              <div className="pt-[5px] ">
                <Link to="/neptune">
                  <span className="px-8 py-2 border rounded-full hover:bg-white hover:text-black ease duration-200">
                    Explore
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[90px]">
            <div className="left-[-120px] absolute">
              <img className="object-contain  w-[360%]" src={Clouds} alt="" />
              <img
                className="object-contain w-[50%] pl-[40px] rotate-180"
                src={Clouds}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-[350px]">
        <div className="grid grid-cols-2 mt-[50px]">
          <div className="text-white relative ">
            <div className="absolute left-[50%]">
              <p className=" mb-4 font-light text-xl">
                to the bottom of the ocean
              </p>
              <div className="pt-[5px] ">
                <Link to="/neptune">
                  <span className="px-8 py-2 border rounded-full hover:bg-white hover:text-black ease duration-200">
                    Explore
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-[150px]">
            <div className="left-[0px] absolute">
              <img className="object-contain  w-[350%]" src={Rocky} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
