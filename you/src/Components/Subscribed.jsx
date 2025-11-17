import React from "react";

function Subscribed() {
  const subscribed = JSON.parse(localStorage.getItem("subscribed")) || [];
  const videos = JSON.parse(localStorage.getItem("videos")) || [];

  const subscribedVideos = videos.filter((v) => subscribed.includes(v.id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subscribed Videos</h2>

      {subscribedVideos.length === 0 && <p>No subscribed videos</p>}

      {subscribedVideos.map((v) => (
        <div
          key={v.id}
          style={{
            width: "80%",              // centered card
            margin: "40px auto",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <iframe
            width="100%"
            height="350"
            src={v.url}
            style={{
              borderRadius: "15px",
              border: "none",
            }}
          ></iframe>

          <h3 style={{ marginTop: "15px" }}>{v.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Subscribed;
