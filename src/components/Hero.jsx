import React, { useContext, useState } from "react";
import { themeContext } from "../context/ThemeContext";
import DevxHero from "./DevxHero";

const Hero = () => {
  var theme = useContext(themeContext);

  return (
    <div className="fcenter hero">
      <DevxHero />
      <div className="scrollDiv">Scroll Down</div>
    </div>
  );
};

export default Hero;
