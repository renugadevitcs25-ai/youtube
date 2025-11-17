// Subscribed.jsx
import React from "react";

function Subscribed() {
  const subscribed = JSON.parse(localStorage.getItem("subscribed")) || [];
  const videos = JSON.parse(localStorage.getItem("videos")) || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subscribed Videos</h2>

      {subscribed.length === 0 ? <p>No subscribed videos</p> : null}

      {videos
        .filter((v) => subscribed.includes(v.id))
        .map((v) => (
          <div key={v.id} style={{ marginBottom: "20px" }}>
            <iframe width="100%" height="250" src={v.url}></iframe>
            <h3>{v.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default Subscribed;
