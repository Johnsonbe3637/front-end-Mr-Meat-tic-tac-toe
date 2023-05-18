import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
// import { useHistory } from "react-router-dom";
// import PropTypes from "prop-types";

function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();
  // const history = useHistory();

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        const { firstName, lastName, username, token, userId } = res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);

        setIsAuth(true);
        window.location.href = "/game";
        // history.push("/game");
        //TODO REDIRECT TO GAME PAGE
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login">
      <label> Login</label>

      <input
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}> Login</button>
    </div>
  );
}

export default Login;
