import React from "react";
import logo_tiu from "/assets/logo_tiu.png";
import logo_prepinsta from "/assets/logo_prepinsta.png";
import logo_edugraph from "/assets/logo_edugraph.png";
import logo_edureka from "/assets/logo_edureka.png";
import logo_imaginor from "/assets/logo_imaginor.jfif";
import logo_kolkatar_golpo from "/assets/logo_kolkatar_golpo.png";
import partners from "../data/partners.json";
const Partners = () => {
  return (
    <div className="partners" id="partners">
      <h1 className="title">PARTNERS</h1>
      <p>
        We're thankful to all our sponsors who are making DEVx 2023 amazing. To
        become a sponsor, please email as at{" "}
        <a href="mailto:gdsctiu@gmail.com"> gdsctiu@gmail.com</a>
      </p>
      <p>
        <a href="/assets/DEVx_Brochure.pdf" download="DEVx Brochure">
          Download Brochure
        </a>
      </p>
      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="titleSponsor">
          Title Sponsor
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://www.technoindiauniversity.ac.in/"
            className="partnerImage"
          >
            <img src={logo_tiu} alt="TIU" />
          </a>
        </div>
      </div>

      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="goldSponsor">
          Gold Sponsor
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://imaginorlabs.com/"
            className="partnerImage"
            target={"_blank"}
          >
            <img src={logo_imaginor} alt="imaginor" />
          </a>
        </div>
      </div>
      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="knowledgePartner">
          Knowledge Partner
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://www.edureka.co/"
            className="partnerImage"
            target={"_blank"}
          >
            <img src={logo_edureka} alt="Edureka" />
          </a>
        </div>
      </div>

      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="edTechSponsor">
          EdTech Partner
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://prepinsta.com/"
            className="partnerImage"
            target={"_blank"}
          >
            <img src={logo_prepinsta} alt="PrepInsta" />
          </a>
        </div>
      </div>

      {/* <div className="rowPartnersWrapper"> */}
      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="digitalMediaSponsor">
          Digital Media Partner
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://www.telegraphindia.com/edugraph"
            className="partnerImage"
            target={"_blank"}
          >
            <img src={logo_edugraph} alt="Edugraph" />
          </a>
        </div>
      </div>

      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="socialMediaSponsor">
          Social Media Partner
        </h3>
        <div className="partnerImageWrapper">
          <a
            href="https://www.instagram.com/kolkatar_golpo/"
            className="partnerImage"
            target={"_blank"}
          >
            <img src={logo_kolkatar_golpo} alt="Kolkatar Golpo" />
          </a>
        </div>
      </div>
      {/* </div> */}

      <div className="partnersWrapper">
        <h3 className="partnersTitle" id="digitalMediaSponsor">
          Community Partners
        </h3>
        <div className="partnerImageWrapper communityPartnersWrapper">
          {partners?.map((partner) => (
            <a
              href={partner?.link}
              className="partnerImage communityPartners"
              title={partner?.name}
              target={"_blank"}
              key={partner?.id}
            >
              <img src={partner?.image} alt={partner?.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
