import React from "react";
import blackbg from "/assets/black.svg";
import headerBg from "/assets/headerBg.png";
import headerBg2 from "/assets/headerBg2.jpeg";
import headerBg3 from "/assets/headerBg3.png";
import overlay from "/assets/overlay.svg";

const DevxHero = () => {
  return (
    <div className="devxHero">
      <img src={blackbg} alt="" />
      <img src={headerBg2} alt="" />
      <img className="" src={overlay} alt="" />
    </div>
  );
};

export default DevxHero;
