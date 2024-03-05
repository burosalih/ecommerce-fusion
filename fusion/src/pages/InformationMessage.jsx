import React, { useContext, useState } from "react";
import { InformationMessageContext } from "../context/InformationMessageContext";
import InformationMessage from "../components/InformationMessageComponent";

const InromationMess = () => {
  const { message } = useContext(InformationMessageContext);

  return (
    <div>
      {message.map((mes) => {
        return <InformationMessage message={mes} />;
      })}
    </div>
  );
};

export default InromationMess;
