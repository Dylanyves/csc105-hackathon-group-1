import React from "react";
import { Link } from "react-router-dom";

import BetaFish from "../assets/images/beta-fish.png";
import Neptune from "../assets/images/neptune.png";

function Home(props) {
  return (
    <div className="bg-black h-[100vh]">
      <img
        className="relative left-[-13rem] top-[10rem] w-[200rem]"
        src={Neptune}
        alt=""
      />
    </div>
  );
}

export default Home;
