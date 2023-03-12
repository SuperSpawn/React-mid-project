import React, { useRef, useState } from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/LoginInput.css";
import "../styles/Register.css";

import { createUser } from "../CRUD/crud";
import { useNavigate } from "react-router-dom";
import fetchUsers from "../service/fetchUsers";

import { generateMonster } from "../logic/logic";
import { products } from "../logic/logic";

export const Register = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);

  const [error, setError] = useState(0);
  const navigate = useNavigate();

  const registerHandler = () => {
    const data = {};
    data.name = nameRef.current.value;
    if (data.name === "") {
      setError(1);
      return;
    }
    data.email = emailRef.current.value;
    if (data.email === "") {
      setError(1);
      return;
    }
    data.password = password1Ref.current.value;
    if (data.password === "") {
      setError(1);
      return;
    }
    if (data.password !== password2Ref.current.value) {
      setError(2);
      return;
    }
    data.gold = 500;
    data.isAdmin = false;
    data.location = "";
    data.gang = [];
    data.gang[0] = generateMonster();
    data.gang[1] = generateMonster();
    data.inventory = [];
    for (let i = 0; i < products.length; i++) {
      data.inventory[i] = 0;
    }

    createUser(data);
    const users = fetchUsers();
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  return (
    <div className="Register-container page-height">
      <div className="Register-input-container Home-LoginInput-container">
        <p>Full name</p>
        <input ref={nameRef} type="text" placeholder="e.g. John Doe" />
        <p>Email</p>
        <input ref={emailRef} type="email" placeholder="e.g. john@doe.com" />
        <p>Password</p>
        <input ref={password1Ref} type="password" placeholder="e.g. 123" />
        <p>Confirm password</p>
        <input ref={password2Ref} type="password" />
        {error === 1 && <h3>* Please fill all boxes</h3>}
        {error === 2 && <h3>* Passwords don't match</h3>}
        <div className="Home-Login-buttons-container">
          <button onClick={registerHandler}>Register</button>
        </div>
      </div>
    </div>
  );
};
