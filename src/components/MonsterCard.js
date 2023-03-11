import React from "react";

export const MonsterCard = ({ data }) => {
  return (
    <div className="MonsterCard-container">
      <h3>{data.name}</h3>
      <img src={data.avatar} alt={data.name} />
      <p>Type: {data.type}</p>
      <p>HP: {data.hp}</p>
      <p>Mana: {data.mana}</p>
    </div>
  );
};
