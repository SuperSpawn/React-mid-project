import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/LocationCard.css";

import uuid from "react-uuid";
import { products } from "../logic/logic";

export const LocationCard = ({ data }) => {
  return (
    <div className="LocationCard-container">
      <p>{data.name}</p>
      <ul>
        {data.shops.map((shop) => {
          return (
            <li key={uuid()}>
              <p>{shop.name}</p>
              <p>
                {shop.catalog.map((cat, index) => {
                  return (
                    <span key={uuid()}>
                      {products[index].name}: {cat * products[index].price}{" "}
                    </span>
                  );
                })}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
