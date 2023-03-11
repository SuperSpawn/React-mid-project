import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/UserCard.css";

export const UserCard = ({ user }) => {
  //if (user.email === "") return null;
  return (
    <tr className="UserCard-container">
      <td>
        <button>X</button>
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
      <td>
        <button>gang</button>
      </td>
      <td>
        <button>edit</button>
      </td>
    </tr>
  );
};
