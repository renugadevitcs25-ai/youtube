import React from "react";

function History() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const videos = JSON.parse(localStorage.getItem("videos")) || [];

  const watchedVideos = videos.filter((v) => history.includes(v.id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Watch History</h2>

      {watchedVideos.length === 0 && <p>No videos watched yet.</p>}

      {watchedVideos.map((v) => (
        <div
          key={v.id}
          style={{
            background: "#f5f5f5",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            
          }}
        >
          <iframe width="100%" height="250" src={v.url}></iframe>
          <h3>{v.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default History;
