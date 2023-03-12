import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/UserCard.css";

import { CardState } from "./CardState";

import { deleteUser } from "../CRUD/crud";
import fetchUsers from "../service/fetchUsers";

export const UserCard = ({ user, userIndex, refresh, setRefresh }) => {
  const [cardState, setCardState] = useState(0);
  if (user.email === "") return null;

  const deleteHandler = () => {
    deleteUser(userIndex + 1);
    localStorage.removeItem("users");
    fetchUsers();
    setRefresh(!refresh);
  };

  return (
    <tr className="UserCard-container">
      <td>
        <button onClick={deleteHandler}>X</button>
      </td>
      <td>
        <p>{user.name}</p>
      </td>
      <td>
        <p>{user.email}</p>
      </td>
      <td>
        <p>{user.password}</p>
      </td>
      <td>{user.isAdmin ? <p>Admin</p> : <p>User</p>}</td>
      <td>
        <button onClick={() => setCardState(cardState !== 1 ? 1 : 0)}>
          edit
        </button>
      </td>
      <td>
        <CardState state={cardState} user={user} />
      </td>
    </tr>
  );
};
