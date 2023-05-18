import { useState, useEffect } from 'react'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cookies from "universal-cookie";
import JoinGame from "./components/JoinGame";
import Square from "./components/Square";
import { Patterns } from "./components/WinningPatterns";
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function LoginSignUp({ setIsAuth  }) {
  return (
    <div className="login-signup-container">
      <Login className="login-form" />
      <SignUp setIsAuth={setIsAuth} className="signup-form" />
    </div>
  );
}





function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route exact path="/"
         element={<LoginSignUp setIsAuth={setIsAuth} />} />
        <Route path="/join-game" 
        element={<JoinGame setIsAuth={setIsAuth} />} />
      </Routes>
    </>

  );

}

export default App;