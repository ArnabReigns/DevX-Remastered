import React, { createContext, useState } from "react";
import { useEffect } from "react";

const themeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [dark, setdark] = useState(true);
  const [ticketModal, setTicketModal] = useState(false);
  const [ticketCount, setTicketCount] = useState(600);
  const [d1ticketCount, setd1TicketCount] = useState(216);
  const [uri, setUri] = useState(
    "https://script.google.com/macros/s/AKfycbxdrdXn4IXRkPQ3y6GQ8MRmEhv7dJai6YXnpG1TZzsqP3qy1_nmu9T9H_lgaDS9U_6rlQ/exec"
  );
  const [d1Uri, setD1Uri] = useState(
    "https://script.google.com/macros/s/AKfycbyH1EdqjND1o5fuHlcxMDs58X_PHNv2XzUkg9jQ4BfMAOrd5teHuJOwsqJRwp03nTWA9Q/exec"
  );
  function toggleMode() {
    setdark((prev) => !prev);
  }

  function toggleTicket() {
    setTicketModal((prev) => !prev);
  }

  var value = {
    darkmode: dark,
    toggle: toggleMode,
    ticket: ticketModal,
    toggleTicket: toggleTicket,
    ticketCount: ticketCount,
    d1ticketCount: d1ticketCount,
  };
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setTicketCount(data.data))
      .catch((err) => console.log(err));

    fetch(d1Uri)
      .then((res) => res.json())
      .then((data) => setd1TicketCount(data?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export { themeContext, ThemeContextProvider };
