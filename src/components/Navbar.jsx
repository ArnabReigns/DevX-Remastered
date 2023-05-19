import React, { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { getMobileOperatingSystem } from "../functions/userAgent.js";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  var theme = useContext(themeContext);
  const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   const onScroll = () => setScroll(window.pageYOffset);
  //   // clean up code
  //   window.removeEventListener("scroll", onScroll);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  // useEffect(() => {

  //   if (scroll === 0)
  //     document.querySelector(".navbar")?.classList?.remove("boxShadow");
  //   else if (scroll > 20)

  //     document.querySelector(".navbar")?.classList?.add("boxShadow");
  // }, [scroll]);

  const navbar = useRef();

  useEffect(() => {
    var nav = navbar.current;

    window.onscroll = function (e) {
      if (this.pageYOffset === 0) nav?.classList?.remove("boxShadow");
      else if (this.pageYOffset > 50) {
        if (this.oldScroll > this.scrollY) nav.style.marginTop = "0px";
        else {
          nav.style.marginTop = "-6rem";
        }

        if (nav.style.marginTop == "-6rem") nav?.classList?.remove("boxShadow");
        else {
          document.querySelector(".navbar")?.classList?.add("boxShadow");
        }
      }

      this.oldScroll = this.scrollY;
    };
  }, []);

  return (
    <div className="p1 navbar flex  aic" id="nav" ref={navbar}>
      <h1 className="fsl fwcb">
        <span style={{ color: "var(--orange-color)" }}>DEV</span>
        <span style={{ color: "var(--blue-color)" }}>x</span>
      </h1>
      {getMobileOperatingSystem() != "iOS" && (
        <div className="flex jcb fss  options">
          <a className="ULAnim" href="#about">
            ABOUT US
          </a>
          <a className="ULAnim" href="#schedule">
            SCHEDULE
          </a>
          <a className="ULAnim" href="#speakers">
            SPEAKERS
          </a>
          <a className="ULAnim" href="#faq">
            FAQ
          </a>
          <a className="ULAnim" href="#partners">
            PARTNERS
          </a>
          <a className="ULAnim" href="#contact">
            CONTACT US
          </a>
        </div>
      )}
      <div className="flex fgap jce">
        <div className="themeToggler" onClick={theme.toggle}>
          {theme?.darkmode ? <IoMdMoon /> : <MdOutlineWbSunny />}
        </div>
        <button className="rounded-sm registerBtn" onClick={theme.toggleTicket}>
          BUY TICKETS
        </button>
      </div>
    </div>
  );
};

export default Navbar;
