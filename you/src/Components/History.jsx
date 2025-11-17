import React from "react";

function History() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const videos = JSON.parse(localStorage.getItem("videos")) || [];

  const watchedVideos = videos.filter((v) => history.includes(v.id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>Watch History</h2>

      {watchedVideos.length === 0 && <p>No videos watched yet.</p>}

      {watchedVideos.map((v) => (
        <div
          key={v.id}
          style={{
            width: "70%",              
            margin: "auto",
            background: "#ffffff",
            padding: "20px",
            marginBottom: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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

export default History;
