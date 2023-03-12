import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Location.css";

import { NoPage } from "./NoPage";
import { useNavigate } from "react-router-dom";

export const Location = () => {
  const navigate = useNavigate();

  const location = JSON.parse(localStorage.getItem("location"));
  if (!location) return <NoPage />;

  return (
    <div className="Location-container page-height">
      {location.shops.map((shop) => {
        return (
          <div key={shop.id} shop={shop} className="Location-shop-container">
            <h3>{shop.name}</h3>
            <button
              onClick={() => {
                localStorage.setItem("store", JSON.stringify(shop));
                navigate("/store");
              }}
            >
              Enter
            </button>
          </div>
        );
      })}
    </div>
  );
};
