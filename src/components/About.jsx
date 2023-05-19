import React from "react";
import AboutTri from "./AboutTri";
import logo_gdsc from "/assets/logo_gdsc.png";
import logo_tiu from "/assets/logo_tiu.png";
import logo_edugraph from "/assets/logo_edugraph.png";
import { getMobileOperatingSystem } from "../functions/userAgent";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="content">
        <h3>
          About{" "}
          <span
            style={{ fontFamily: "Devx,sans-serif", textTransform: "none" }}
          >
            <span style={{ color: "var(--orange-color)" }}>DEV</span>
            <span style={{ color: "var(--blue-color)" }}>x</span>
          </span>
        </h3>
        <p>
          DEVx 2023 is the annual spring fest of Google Developer Students Club,
          Techno India University. It is a 2 day event featuring some of the
          most popular faces of India and some of the most experienced people,
          this country has witnessed. Day 1 - <strong>TechXperience</strong>{" "}
          constitutes a day of coding, placements, and technical sessions.{" "}
          <br /> Day 2 - <strong>Tech-a-break</strong> features various famous
          entrepreneurs across the vast country of India and some famed content
          creators.
        </p>
        {/* <p>
          DevX 1.0 is a product of the students’ enthusiasm and interest in the
          club. Although the earlier events were on a selective basis, the
          interest of students is too intense to contain them within the four
          walls of the seminar hall, instead we decided to keep Devx1.0 open air
          students and have events dispersed throughout the vast Techno India
          Group campus at Salt Lake. This time, we are going to organize an open
          for all event to connect and coordinate among all the peers interested
          in tech and give them guidance throughout.
        </p> */}
        <div style={{ fontWeight: 600 }}>
          Organized By:
          <div className="logoSection">
            <a
              href="https://bit.ly/DSCTIU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo_gdsc} alt="GDSC TIU Logo" className="logos" />
            </a>
            <a
              href="https://www.technoindiauniversity.ac.in/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo_tiu} alt="TIU Logo" className="logos" />
            </a>
            {/* <img src={logo_edugraph} alt="edugraph Logo" className="logos" /> */}
          </div>
        </div>
        <p style={{ fontWeight: 600 }}>
          Dates: &nbsp; 29<sup>th</sup>-30<sup>th</sup> April 2023
        </p>
      </div>
      {getMobileOperatingSystem() != "iOS" && <AboutTri />}
    </div>
  );
};

export default About;
