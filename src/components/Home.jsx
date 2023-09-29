import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      onLogin(username);
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = () => {
    alert(`User "${username}" registered successfully!`);
    onLogin(username);
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/listings" />;
  }

  return (
    <div>
      <h1>Welcome to Stanger's Things</h1>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Home;
