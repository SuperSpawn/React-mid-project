import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/LoginInput.css";
import "../styles/Login.css";

import fetchUsers from "../service/fetchUsers";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user) navigate("/map");

  const validateLogin = () => {
    //TODO: validate login information
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError(1);
      return;
    }

    const users = fetchUsers();
    for (let i in users) {
      if (
        users[i].email === emailRef.current.value &&
        users[i].password === passwordRef.current.value
      ) {
        localStorage.setItem("user", JSON.stringify(users[i]));
        navigate("/map");
        return;
      }
    }
    setError(1);
  };

  return (
    <div className="Home-Login-container page-height">
      <div className="Home-LoginInput-container">
        <p>Email</p>
        <input ref={emailRef} type="email" placeholder="e.g. john@doe.com" />
        <p>Password</p>
        <input ref={passwordRef} type="password" placeholder="e.g. 123" />

        {error === 1 && <h3>* no such user</h3>}
      </div>
      <div className="Home-Login-buttons-container">
        <button onClick={validateLogin}>Login</button>
      </div>
      <Link to="/register">
        <span className="Home-Login-register-link">
          Don't have an account? register a new account
        </span>
      </Link>
    </div>
  );
};
