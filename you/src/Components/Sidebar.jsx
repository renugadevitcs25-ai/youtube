import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ close }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        position: "fixed",
        top: "0",
        left: "0",
        boxShadow: "3px 0px 12px rgba(0,0,0,0.2)",
        zIndex: 2000,
        animation: "slideIn 0.3s ease",
      }}
    >
      <h2
        style={{
          color: "red",
          marginBottom: "25px",
          fontSize: "28px",
        }}
      >
        Menu
      </h2>

      <p onClick={() => navigate("/liked")} style={styles.option}>
        ❤️ Liked Videos
      </p>

      <p onClick={() => navigate("/subscribed")} style={styles.option}>
        🔔 Subscribed
      </p>

      <p onClick={() => navigate("/history")} style={styles.option}>
        🕒 History
      </p>

      <p onClick={() => navigate("/shorts")} style={styles.option}>
        🎬 Shorts
      </p>

      <button
        onClick={close}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          background: "red",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
}

const styles = {
  option: {
    fontSize: "20px",
    marginBottom: "18px",
    cursor: "pointer",
    padding: "8px 5px",
    borderRadius: "6px",
    transition: "0.2s",
    userSelect: "none",
    color: "black",
  },
};

// Hover styling
styles.option[":hover"] = {
  backgroundColor: "#ffecec",
};

export default Sidebar;
