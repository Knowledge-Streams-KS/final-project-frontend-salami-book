import React, { useState } from "react";
import GoogleMapComponent from "./GoogleMapComponent";

const FieldCards = (props) => {
  const [seeLocation, setSeeLocation] = useState(false);
  return (
    <div className="w-72 space-y-1 rounded-md bg-[#232727] p-4">
      <h1 className="pb-4 text-3xl text-[#08723e]">{props.name}</h1>
      <p className="text-white">{props.description}</p>
      <div className="">
        {seeLocation ? (
          <GoogleMapComponent position={props.location} />
        ) : (
          <button onClick={() => setSeeLocation(true)}>See Location...</button>
        )}
      </div>
    </div>
  );
};

export default FieldCards;
