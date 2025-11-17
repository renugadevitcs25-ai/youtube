// Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const correctPassword = "2008";
  const navigate = useNavigate();

  function login() {
    if (username.trim() === "" || password.trim() === "") {
      alert("Enter email and password");
      return;
    }
    if (password !== correctPassword) {
      alert("Wrong password");
      return;
    }

    localStorage.setItem("user", username);
    navigate("/vedio");
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>YouTube Login</h1>

        <input
          placeholder="Enter Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={login} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f1f1",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#FF0000",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

// Extra styling for focus effect
styles.input[":focus"] = {
  borderColor: "red",
};

export default Home;
