import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/UsersList.css";

import { UserCard } from "./UserCard";
import uuid from "react-uuid";

export const UsersList = ({ setError }) => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    setError(1);
    return null;
  }

  return (
    <table className="UsersList-container">
      {users.map((user) => {
        return <UserCard key={uuid()} user={user} />;
      })}
    </table>
  );
};
