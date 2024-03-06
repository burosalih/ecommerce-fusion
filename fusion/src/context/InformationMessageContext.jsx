import React, { createContext, useState, useEffect } from "react";

export const InformationMessageContext = createContext();

const InformationMessageProvider = ({ children }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchInformationMessage = async () => {
      try {
        console.log("dohvatanje poruka");
        const response = await fetch(
          "https://fusion-38461-default-rtdb.europe-west1.firebasedatabase.app/poruka/0/poruka.json"
        );

        console.log(response);
        const data = await response.json();

        // Filtrirajte objekte koji nisu null
        const filteredData = Object.values(data).filter(
          (message) => message !== null
        );

        console.log(filteredData);

        setMessage(filteredData);
      } catch (error) {
        console.error("Greška prilikom dohvatanja informativne poruke", error);
      }
    };
    fetchInformationMessage();
  }, []);

  return (
    <InformationMessageContext.Provider value={{ message, setMessage }}>
      {children}
    </InformationMessageContext.Provider>
  );
};

export default InformationMessageProvider;
