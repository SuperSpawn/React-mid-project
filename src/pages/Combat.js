import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Combat.css";

import { generateMonster } from "../logic/logic";

export const Combat = () => {
  let monster = JSON.parse(localStorage.getItem("monster"));
  if (!monster || monster === undefined) {
    console.log("empty");
    monster = generateMonster();
    localStorage.setItem("monster", JSON.stringify(monster));
  }

  return (
    <div className="Combat-container page-height">
      <div className="Monster-container">
        <h3>{monster.name}</h3>
        <p>HP: {monster.hp}</p>
        <p>Mana: {monster.mana}</p>
        <img src={monster.avatar} alt={monster.name} />
      </div>
      <div className="Combat-player-container">player</div>
    </div>
  );
};
