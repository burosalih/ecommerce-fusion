import React, { useState } from "react";
import { MdInbox, MdClose } from "react-icons/md";

const InformationMessage = ({ message }) => {
  const { prikazi, tekst } = message;
  const [prikaziTekst, setPrikaziTekst] = useState(true);

  return (
    <>
      {prikazi ? (
        <>
          {prikaziTekst ? (
            <div
              className="w-full ml-2 md:w-80 lg:w-96 h-auto bg-primary/75 backdrop-blur-sm px-4 md:px-6 lg:px-8 py-6 md:py-8 mb-6 md:mb-8 lg:mb-10 rounded-2xl shadow-lg text-white flex items-center overflow-hidden relative"
              onClick={() => setPrikaziTekst(false)}
              style={{ cursor: "pointer" }}
            >
              <p className="text-sm md:text-base lg:text-lg">{tekst}</p>
              <button
                className="absolute top-2 right-2 text-white"
                onClick={() => setPrikaziTekst(false)}
              >
                <MdClose size={20} />
              </button>
            </div>
          ) : (
            <div
              className="w-full h-auto bg-primary/80 backdrop-blur-sm px-6 md:px-8 lg:px-8 py-6 md:py-8 mb-6 md:mb-8 lg:mb-10 rounded-full shadow-lg text-white flex items-center overflow-hidden"
              onClick={() => setPrikaziTekst(true)}
              style={{ cursor: "pointer", position: "relative"}}
            >
              <MdInbox size={30}/>
              <div className="bg-red-500 absolute right-4 top-4 md:right-6 md:top-6 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center animate-ring">
                1
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

export default InformationMessage;
