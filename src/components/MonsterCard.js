import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/MonsterCard.css";

export const MonsterCard = ({ data, addClass }) => {
  return (
    <div className={"MonsterCard-container " + addClass}>
      <h3>{data.name}</h3>
      <img src={data.avatar} alt={data.name} />
      <p>Type: {data.type}</p>
      <p>HP: {data.hp}</p>
      <p>Mana: {data.mana}</p>
    </div>
  );
};
