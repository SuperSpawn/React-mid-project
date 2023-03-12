import React, { useState, useEffect } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Combat.css";

import { generateMonster } from "../logic/logic";
import { MonsterCard } from "../components/MonsterCard";

import { NoPage } from "./NoPage";
import uuid from "react-uuid";

import { products } from "../logic/logic";
import { generateRandomInt } from "../logic/logic";
import { calculateDamage } from "../logic/logic";

import { useNavigate } from "react-router-dom";
import { updateUser } from "../CRUD/crud";
export const Combat = () => {
  const [turn, setTurn] = useState(0);
  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user"));
  let monster = JSON.parse(localStorage.getItem("monster"));
  let turnArray = [];

  useEffect(() => {
    if (monster.hp <= 0) {
      localStorage.removeItem("monster");
      user.gold += 20 + 7 * generateRandomInt(17);
      updateUser(user.id, user);
      navigate("/map");
    }
  });

  if (!user) return <NoPage />;

  if (!monster || monster === undefined) {
    monster = generateMonster();
    localStorage.setItem("monster", JSON.stringify(monster));
  }

  turnArray.push(monster);
  for (let i of user.gang) turnArray.push(i);
  for (let i in turnArray) {
    turnArray[i].byWho = "player";
    turnArray[0].byWho = "monster";
  }
  turnArray.sort((a, b) => {
    return a.stats[1] - b.stats[1];
  });

  const monsterClasses =
    turnArray[turn].byWho === "monster" ? "MonsterCard-selected" : "";

  if (turnArray[turn].byWho === "monster") {
    setTimeout(() => {
      const randomIndex = generateRandomInt(user.gang.length);
      const attack = generateRandomInt(monster.abilities.length);
      //hit
      const dmg = calculateDamage(
        monster.abilities[attack].dmg,
        monster.stats,
        turnArray[randomIndex].stats,
        monster.type,
        turnArray[randomIndex].type
      );
      user.gang[randomIndex].hp -= dmg;
      localStorage.setItem("user", JSON.stringify(user));
      setTurn((turn + 1) % turnArray.length);
    }, 2000);
  }

  if (turnArray[turn].hp <= 0) {
    setTurn((turn + 1) % turnArray.length);
  }

  return (
    <div className="Combat-container page-height">
      <MonsterCard data={monster} addClass={monsterClasses} />
      <div className="Combat-panel">
        <div className="Attack-options">
          {turnArray[turn].abilities.map((ability, index) => {
            return (
              <button
                key={uuid()}
                onClick={() => {
                  if (ability.cost <= turnArray[turn].mana) {
                    turnArray[turn].mana -= ability.cost;
                    const dmg = calculateDamage(
                      ability.dmg,
                      turnArray[turn].stats,
                      monster.stats,
                      turnArray[turn].type,
                      monster.type
                    );
                    monster.hp -= dmg;
                    localStorage.setItem("monster", JSON.stringify(monster));
                    let j = 0;
                    for (let i in turnArray) {
                      if (turnArray[i].byWho !== "monster") {
                        user.gang[j].hp = turnArray[i].hp;
                        user.gang[j].mana = turnArray[i].mana;
                        ++j;
                      }
                    }
                    localStorage.setItem("user", JSON.stringify(user));
                    setTurn((turn + 1) % turnArray.length);
                  }
                }}
              >
                Use {ability.name} dmg: {ability.dmg} cost: {ability.cost}
              </button>
            );
          })}
        </div>
        <div className="Inventory-info">
          {products.map((product, index) => {
            return (
              <h3 key={uuid()}>
                {product.name}: {user.inventory[index]}
              </h3>
            );
          })}
        </div>
        <div className="Item-options">
          {products.map((product, index) => {
            return (
              <button
                key={uuid()}
                onClick={() => {
                  if (user.inventory[index] > 0) {
                    user.inventory[index]--;
                    turnArray[turn].hp += product.hp;
                    turnArray[turn].mana += product.mana;

                    let j = 0;
                    for (let i in turnArray) {
                      if (turnArray[i].byWho !== "monster") {
                        user.gang[j].hp = turnArray[i].hp;
                        user.gang[j].mana = turnArray[i].mana;
                        ++j;
                      }
                    }
                    localStorage.setItem("user", JSON.stringify(user));
                    setTurn((turn + 1) % turnArray.length);
                  }
                }}
              >
                use {product.name} hp: {product.hp} mana: {product.mana}
              </button>
            );
          })}
        </div>
      </div>
      <div className="Combat-player-container">
        {turnArray.map((monster, index) => {
          if (monster.byWho === "monster") return null;
          const addClass = index === turn ? "MonsterCard-selected" : "";
          return (
            <MonsterCard key={uuid()} data={monster} addClass={addClass} />
          );
        })}
      </div>
    </div>
  );
};
