import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

function Shorts() {
  const shorts = [
    "https://www.youtube.com/embed/Tn6-PIqc4UM?si=WUqzylpkPPlNVSCy",
    "https://www.youtube.com/embed/wPc6mANhIj4?si=xn9ePpN7vEUF-gJ9",
    "https://www.youtube.com/embed/Ata9cSC2WpM?si=s6VzdUGdbEfxfOTV",
    "https://www.youtube.com/embed/gvkqT_Uoahw?si=MqY7zUi_k451H976",
  ];

  const [counts, setCounts] = useState(
    shorts.map(() => ({ likes: 0, unlikes: 0 }))
  );

  const handleLike = (index) => {
    const newCounts = [...counts];
    newCounts[index].likes++;
    setCounts(newCounts);
  };

  const handleUnlike = (index) => {
    const newCounts = [...counts];
    newCounts[index].unlikes++;
    setCounts(newCounts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shorts</h2>

      {shorts.map((url, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px",
          }}>
          <div
            style={{
              width: "300px",
              height: "500px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={url}
              style={{ border: "none" }}
            ></iframe>
          </div>

          <div style={{ marginLeft: "20px", textAlign: "center" }}>
            <button
              onClick={() => handleLike(index)}
              style={{
                display: "block",
                marginBottom: "20px",
                background: "transparent",
                border: "none",
                fontSize: "35px",
                cursor: "pointer",
                color: "black",
              }}
            >
              <FaThumbsUp />
              <div style={{ fontSize: "20px", marginTop: "5px" }}>
                {counts[index].likes}
              </div>
            </button>

            <button
              onClick={() => handleUnlike(index)}
              style={{
                display: "block",
                background: "transparent",
                border: "none",
                fontSize: "35px",
                cursor: "pointer",
                color: "black",
              }}
            >
              <FaThumbsDown />
              <div style={{ fontSize: "20px", marginTop: "5px" }}>
                {counts[index].unlikes}
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shorts;
