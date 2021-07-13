import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);

  if (!showInfo) {
    return (
      <div>
        {country.name}
        <button onClick={() => setShowInfo(!showInfo)}>show</button>
      </div>
    );
  } else {
    return <Country country={country} />;
  }
};

export default Countries;
