import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/ThemeContext";

const TicketModal = () => {
  var theme = useContext(themeContext);

  return (
    <div className="ticketModalWrapper">
      <div className="ticketModal">
        <div className="modalTop">
          <h3>Buy Tickets for</h3>
          <div className="closeBtn" onClick={theme.toggleTicket}>
            Close
          </div>
        </div>
        <div className="modalDetails">
          <div className="ticketDiv">
            <a
              // href="https://bit.ly/DEVXD1TICKETS"
              target={"_blank"}
              rel="noopener noreferrer"
              className="formButton"
              disabled
              style={{ pointerEvents: "none" }}
            >
              Day 1
            </a>

            <p className="ticketsLeft">SOLD OUT</p>
            <p>
              DSA | Coding | Placements | Multiple speakers with experiences in
              the industry
            </p>
          </div>
          <div className="ticketDiv">
            <a
              href={
                theme.ticketCount <= 411
                  ? "https://docs.google.com/forms/d/e/1FAIpQLScuO20DDtmA2H6v2u1ykCeE5afWcwu2SmSAfIsKaE2luxnHxQ/viewform?usp=sf_link"
                  : ""
              }
              target={"_blank"}
              rel="noopener noreferrer"
              className="formButton"
              style={{ pointerEvents: theme.ticketCount <= 411 ? "" : "none" }}
            >
              Day 2
            </a>
            {/* <p className="ticketsLeft">SOLD OUT</p> */}
            <p className="ticketsLeft">
              {theme.ticketCount == 600 && <>Loading...</>}
            </p>
            {theme.ticketCount !== 600 && (
              <p className="ticketsLeft">
                Extra {parseInt(411 - theme.ticketCount)} tickets left
              </p>
            )}
            <p>
              Innovation | Entrepreneurship | Motivation by country's eminent
              entrepreneurs and content creators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
