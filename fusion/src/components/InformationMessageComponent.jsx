import React, { useState } from "react";
import { MdInbox } from "react-icons/md";

const InformationMessage = ({ message }) => {
  const { prikazi, tekst } = message;
  const [prikazati, setPrikazi] = useState(false);
  const [prikaziTekst, setPrikaziTekst] = useState(false);

  console.log(tekst);
  console.log(prikazi);
  return (
    <>
      {}
      {prikaziTekst ? (
        <div
          className="w-full md:w-80 lg:w-96 h-auto bg-purple-500 px-6 md:px-8 lg:px-10 py-6 md:py-8 mb-6 md:mb-8 lg:mb-10 rounded-lg shadow-lg text-white flex items-center overflow-hidden opacity-75"
          onClick={() => setPrikaziTekst(false)}
          style={{ cursor: "pointer", paddingRight: "50px" }}
        >
          <p className="text-sm md:text-base lg:text-lg">{tekst}</p>
        </div>
      ) : (
        <div
          className="w-full h-auto bg-purple-500 px-6 md:px-8 lg:px-10 py-6 md:py-8 mb-6 md:mb-8 lg:mb-10 rounded-lg shadow-lg text-white flex items-center overflow-hidden opacity-75"
          onClick={() => setPrikaziTekst(true)}
          style={{ cursor: "pointer" }}
        >
          {}
          <MdInbox size={30} />
        </div>
      )}
    </>
  );
};

export default InformationMessage;
