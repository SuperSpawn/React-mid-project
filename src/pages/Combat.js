import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Combat.css";

import { generateMonster } from "../logic/logic";
import { MonsterCard } from "../components/MonsterCard";

import { NoPage } from "./NoPage";

export const Combat = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let monster = JSON.parse(localStorage.getItem("monster"));

  if (!user) return <NoPage />;

  if (!monster || monster === undefined) {
    monster = generateMonster();
    localStorage.setItem("monster", JSON.stringify(monster));
  }

  return (
    <div className="Combat-container page-height">
      <MonsterCard data={monster} />
      <div className="Combat-player-container">
        {user.gang.map((monster) => {
          return <MonsterCard key={monster.name} data={monster} />;
        })}
      </div>
    </div>
  );
};
