import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Store.css";

import { NoPage } from "./NoPage";
import { products } from "../logic/logic";

import { updateUser } from "../CRUD/crud";

export const Store = () => {
  const [reload, setReload] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  const store = JSON.parse(localStorage.getItem("store"));
  if (!store) return <NoPage />;
  if (!user) return <NoPage />;

  const buy1Handler = (product, index) => {
    const price = product.price * store.catalog[index];
    if (user.gold >= price) {
      if (!user.inventory) {
        user.inventory = [];
        for (let i = 0; i < products.length; ++i) {
          user.inventory[i] = 0;
        }
      }
      user.gold -= price;
      user.inventory[index]++;
      updateUser(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
      setReload(!reload);
    }
  };
  const buy5Handler = (product, index) => {
    const price = product.price * 5 * store.catalog[index];
    if (user.gold >= price) {
      if (!user.inventory) {
        user.inventory = [];
        for (let i of products) {
          user.inventory[i] = 0;
        }
      }
      user.gold -= price;
      user.inventory[index] += 5;
      updateUser(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
      setReload(!reload);
    }
  };
  const buy10Handler = (product, index) => {
    const price = product.price * 10 * store.catalog[index];
    if (user.gold >= price) {
      if (!user.inventory) {
        user.inventory = [];
        for (let i of products) {
          user.inventory[i] = 0;
        }
      }
      user.gold -= price;
      user.inventory[index] += 10;
      updateUser(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
      setReload(!reload);
    }
  };

  const sell1Handler = (product, index) => {
    if (user.inventory) {
      if (user.inventory[index] >= 1) {
        user.gold += product.price * store.catalog[index];
        user.inventory[index]--;
        updateUser(user.id, user);
        localStorage.setItem("user", JSON.stringify(user));
        setReload(!reload);
      }
    }
  };
  const sell5Handler = (product, index) => {
    if (user.inventory) {
      if (user.inventory[index] >= 5) {
        user.gold += product.price * store.catalog[index] * 5;
        user.inventory[index] -= 5;
        updateUser(user.id, user);
        localStorage.setItem("user", JSON.stringify(user));
        setReload(!reload);
      }
    }
  };
  const sell10Handler = (product, index) => {
    if (user.inventory) {
      if (user.inventory[index] >= 10) {
        user.gold += product.price * store.catalog[index] * 10;
        user.inventory[index] -= 10;
        updateUser(user.id, user);
        localStorage.setItem("user", JSON.stringify(user));
        setReload(!reload);
      }
    }
  };

  return (
    <div className="Store-container page-height">
      <div className="Store-navbar">
        <h2>{store.name}</h2>
        <h4>gold: {user.gold}</h4>
        <div className="User-inventory">
          {user.inventory &&
            products.map((product, index) => {
              return (
                <h5 key={product.name}>
                  {product.name} : {user.inventory[index]}
                </h5>
              );
            })}
        </div>
      </div>
      <div className="Store-catalog">
        {products.map((product, index) => {
          return (
            <div key={product.name} className="Product-container">
              <div className="Product-info">
                <h5>Name: {product.name}</h5>
                <h5>Price: {product.price * store.catalog[index]}</h5>
                <h5>HP: {product.hp}</h5>
                <h5>Mana: {product.mana}</h5>
              </div>
              <div className="Product-buy">
                <button onClick={() => buy1Handler(product, index)}>
                  buy 1
                </button>
                <button onClick={() => buy5Handler(product, index)}>
                  buy 5
                </button>
                <button onClick={() => buy10Handler(product, index)}>
                  buy 10
                </button>
              </div>
              <div className="Product-sell">
                <button onClick={() => sell1Handler(product, index)}>
                  sell 1
                </button>
                <button onClick={() => sell5Handler(product, index)}>
                  sell 5
                </button>
                <button onClick={() => sell10Handler(product, index)}>
                  sell 10
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
