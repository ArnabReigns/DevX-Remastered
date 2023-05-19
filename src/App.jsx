import { useContext, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Countdown from "react-countdown";

import "./index.css";
import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { themeContext } from "./context/ThemeContext";

import Events from "./components/Events";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Contact from "./components/Contact";
import TicketModal from "./components/TicketModal";
import Partners from "./components/Partners";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";

function App() {
  var theme = useContext(themeContext);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
  }, []);

  return (
    <div className={theme.darkmode ? "app dark" : "app"}>
      <Navbar />
      <Hero />
      {/* <Countdown date="2023-04-29T01:02:03" /> */}
      {theme.ticket && <TicketModal />}
      <Timer />
      <About />
      {/* <Events /> */}
      <Timeline />
      <Speakers />
      <FAQ />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
