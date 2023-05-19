import React from "react";
import browserLogo from "/assets/webIcon.png";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contactDetailsWrapper">
        <h3 className="title">Contact Us</h3>
        <div className="contactDetails">
          <div>
            In case of any queries, please reach out to us
            <section>
              <p>Address:</p>
              EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
              <section>
                <p>Email Us:</p>
                <a
                  href="mailto:gdsctiu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mailLink"
                >
                  gdsctiu@gmail.com
                </a>
              </section>
              <section>
                <p>Follow us on:</p>
                <div className="socialLinks">
                  <a
                    href="https://bit.ly/DSCTIU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mailLink"
                  >
                    <img
                      src={browserLogo}
                      alt="browserLogo"
                      className="browserLogo"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/gdsctiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mailLink"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/gdsc_tiu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mailLink"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gdsc-tiu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mailLink"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/dsc-tiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mailLink"
                  >
                    <FaGithub />
                  </a>
                </div>
              </section>
              <section>
                <a
                  href="https://drive.google.com/file/d/1CE97n23XyZQ2ZYSb69L1LMVFnORm0NTq/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Download Brochure</p>
                </a>
              </section>
            </section>
          </div>
        </div>
      </div>
      <div className="mapWrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1041.3029934226374!2d88.42785070944294!3d22.575908018683606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f970ae9a2e19b5%3A0x16c43b9069f4b159!2sTechno%20India%20University!5e0!3m2!1sen!2sin!4v1680028349311!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
