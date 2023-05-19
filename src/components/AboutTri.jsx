import blackbg from "/assets/aboutBLack.svg";
import headerBg from "/assets/aboutBg.png";
import overlay from "/assets/aboutOverlay.svg";

const AboutTri = () => {
  return (
    <div className="AboutTri">
      <img className="aboutTriImg" src={blackbg} alt="" />
      <img className="aboutTriImg2" src={headerBg} alt="" />
      <img className="aboutTriImg3" src={overlay} alt="" />
    </div>
  );
};

export default AboutTri;
