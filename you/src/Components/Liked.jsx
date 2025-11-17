import React from "react";

function Liked() {
  const liked = JSON.parse(localStorage.getItem("liked")) || [];
  const videos = JSON.parse(localStorage.getItem("videos")) || [];
  const likedVideos = videos.filter((v) => liked.includes(v.id));

  return (
    <div style={{ padding: "20px" }}>
      <h2>❤️ Liked Videos</h2>

      {likedVideos.length === 0 && (
        <p>No liked videos found</p>
      )}

      {likedVideos.map((v) => (
        <div
          key={v.id}
          style={{
            backgroundColor: "#f8f8f8",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "10px",
          }}
        >
          <iframe
            width="100%"
            height="250"
            src={v.url}
            title={v.title}
          ></iframe>

          <h3>{v.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Liked;
