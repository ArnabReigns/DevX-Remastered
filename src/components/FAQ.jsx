import React, { useEffect, useState } from "react";
import faqIcon from "/assets/faqIcon.svg";
import faq from "../data/faq.json";

const AccordionItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionHeader" onClick={() => setOpen(!open)}>
        <span className="accordionHeaderQuestion">{props?.faq?.header}</span>
        <span
          className={"accordionHeaderIcon"}
          style={{ transform: open && "rotate(180deg)" }}
        >
          {/* {open ? <>&#9650;</> : <>&#9660;</>} */}
          &#9660;
        </span>
      </div>
      <div
        className={"accordionBody"}
        style={{
          height: open && "auto",
          padding: open && " 1rem",
        }}
      >
        {props?.faq?.text}
      </div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <div className="cont">
        <h1 className="title">FAQ</h1>
        <p>
          Here's a list of frequently asked questions that you can refer to
          incase of queries
        </p>
      </div>
      <div className="faqAccordionWrapper">
        <div className="faqImage">
          <img src={faqIcon} alt="" />
        </div>
        <div className="faqWrapper">
          {faq?.map((faqItem) => (
            <AccordionItem faq={faqItem} key={faqItem?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
