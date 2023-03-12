import React, { useState, useRef } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/CardState.css";

import { updateUser } from "../CRUD/crud";
import fetchUsers from "../service/fetchUsers";

export const CardState = ({ state, user }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const adminRef = useRef(null);
  const [adminCheck, setAdminCheck] = useState(user.isAdmin);
  const changeHandler = () => {
    let newUser = user;
    if (nameRef.current.value !== "") newUser.name = nameRef.current.value;
    if (emailRef.current.value !== "") newUser.email = emailRef.current.value;
    if (passwordRef.current.value !== "")
      newUser.password = passwordRef.current.value;
    newUser.admin = adminRef.current.checked;
    updateUser(newUser.id, newUser);
    localStorage.removeItem("users");
    fetchUsers(null);
  };

  if (state === 0) return null;
  if (state === 1) {
    return (
      <p className="CardState-edit-container">
        <input ref={nameRef} type="text" placeholder="name" />
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <input
          ref={adminRef}
          type="checkbox"
          checked={adminCheck}
          onChange={() => setAdminCheck((adminCheck) => !adminCheck)}
        />
        <button onClick={changeHandler}>Save Changes</button>
      </p>
    );
  }
};
