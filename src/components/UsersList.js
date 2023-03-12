import React, { useState } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/UsersList.css";

import { UserCard } from "./UserCard";
import { NoPage } from "../pages/NoPage";

import fetchUsers from "../service/fetchUsers";

export const UsersList = () => {
  const [refresh, setRefresh] = useState(false);
  const users = fetchUsers(null);
  if (!users) {
    return <NoPage />;
  }

  return (
    <table className="UsersList-container">
      <tbody>
        {users.map((user, index) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              userIndex={index}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          );
        })}
      </tbody>
    </table>
  );
};
