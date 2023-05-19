import React from "react";
import data from "../data/speakers.json";
import { CgWebsite } from "react-icons/cg";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import browserLogo from "/assets/webIcon.png";

const Speakers = () => {
  return (
    <div className="speakers" id="speakers">
      <div className="cont">
        <h1 className="title">Speakers</h1>
        <p>
          Hear from the Professionals who are building the future of the world.
          Our speakers are influential folks & allies who have been associated
          with communities within their organisations, cities, country and
          beyond.
        </p>
      </div>

      <div className="speakersWrapper">
        {data?.map((data) => (
          <div className="speaker" key={data?.id}>
            <span className={data?.day == 1 ? "banner" : "bannerBlue"}>
              Day {data?.day}
            </span>
            <div className="speakerImageWrapper">
              <div className="speakerImageCircle"></div>
              <img
                src={data?.image}
                alt={data?.name}
                className="speakerImage"
              />
            </div>
            <div className="content">
              <div className="contentDetails">
                <h1>{data?.name}</h1>
                <p>{data?.designation}</p>
              </div>
              <div className="socialLinks">
                {data?.primaryLink && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={browserLogo}
                        alt="browserLogo"
                        className="browserLogo"
                      />
                    </a>
                  </div>
                )}
                {data?.facebook && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                )}
                {data?.linekdin && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.linekdin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                )}
                {data?.youtube && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                )}
                {data?.github && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                )}
                {data?.instagram && (
                  <div className="socialLinkDiv">
                    <a
                      href={data?.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
