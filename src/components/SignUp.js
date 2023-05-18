import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
// import PropTypes from "prop-types";


function SignUp({ setIsAuth }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user,  setUser] = useState({})
  const cookies = new Cookies();


  const signUp = () => {
    axios.post("http://localhost:3001/signup", user)
      .then((res) => {
        const {
          token,
          userId,
          firstName,
          lastName,
          username,
          hashedPassword
        } = res.data;

        console.log(res)
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("firstName", firstName);
        cookies.set("lastName", lastName);
        cookies.set("hashedPassword", hashedPassword);
        setIsAuth(false);
        // console.log(notFound);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="signUp">
      <label> Sign Up</label>
      <input
        placeholder="First Name"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />
      <button onClick={signUp}> Sign Up</button>
    </div>
  );
}

// SignUp.propTypes = {
//   setIsAuth: PropTypes.func.isRequired
// };

export default SignUp;