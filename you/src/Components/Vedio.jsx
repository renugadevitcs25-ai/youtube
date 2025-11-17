import React, { useState, useEffect } from "react";
import { VscMenu } from "react-icons/vsc";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Vedio() {
  const [search, setSearch] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [liked, setLiked] = useState([]);
  const [subscribed, setSubscribed] = useState([]);
  const [history, setHistory] = useState([]);

  const navigate = useNavigate();

  const email = localStorage.getItem("user") || "Guest";
  const username = email.includes("@") ? email.split("@")[0] : email;

  const videos = [
    { id: 1, title: "React Tutorial", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
    { id: 2, title: "JavaScript Basics", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    { id: 3, title: "HTML & CSS Guide", url: "https://www.youtube.com/embed/mU6anWqZJcc" },
    { id: 4, title: "Python Tutorial", url: "https://www.youtube.com/embed/_uQrJ0TkZlc" },
    { id: 5, title: "HTML &CSS", url: "https://www.youtube.com/embed/DHGhFJZLKMs?si=px88vg3rMrgPs1Ga" },
    { id: 6, title: "Node js", url: "https://www.youtube.com/embed/q-xS25lsN3I?si=bEoH-9rmW4Ujr7iI" },
    { id: 7, title: "Angular js", url: "https://www.youtube.com/embed/0agoJoQDTnI?si=viwNAgO7OQaK4Txc" },
    { id: 8, title: "C programming", url: "https://www.youtube.com/embed/-JMSaLRqsgo?si=YuaxBEXbiisQGEop" },
    { id: 9, title: "C++", url: "https://www.youtube.com/embed/McojvctVsUs?si=79c-ETmxL5VzBd0B" }
  ];

  useEffect(() => {
    setLiked(JSON.parse(localStorage.getItem("liked")) || []);
    setSubscribed(JSON.parse(localStorage.getItem("subscribed")) || []);
    setHistory(JSON.parse(localStorage.getItem("history")) || []);

    localStorage.setItem("videos", JSON.stringify(videos));
  }, []);

  // SEARCH FILTER
  const filtered = videos.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  // SAVE TO HISTORY
  function saveToHistory(id) {
    const current = JSON.parse(localStorage.getItem("history")) || [];
    const updated = [...new Set([...current, id])];

    setHistory(updated);
    localStorage.setItem("history", JSON.stringify(updated));
  }

  // LIKE TOGGLE
  function toggleLike(id) {
    const updated = liked.includes(id)
      ? liked.filter((x) => x !== id)
      : [...liked, id];

    setLiked(updated);
    localStorage.setItem("liked", JSON.stringify(updated));
  }

  // SUBSCRIBE TOGGLE
  function toggleSubscribe(id) {
    const updated = subscribed.includes(id)
      ? subscribed.filter((x) => x !== id)
      : [...subscribed, id];

    setSubscribed(updated);
    localStorage.setItem("subscribed", JSON.stringify(updated));
  }

  // ▶ WHEN CLICK VIDEO → OPEN SINGLE PAGE
  function openVideo(id) {
    saveToHistory(id);
    navigate(`/video/${id}`);
  }

  return (
    <div>
      {/* NAVBAR */}
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <VscMenu
          size={30}
          onClick={() => setSidebar(true)}
          style={{ cursor: "pointer" }}
        />

        <h2 style={{ margin: 0 }}>YouTube</h2>

        {/* SEARCH BAR */}
        <input
          placeholder="Search videos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            marginLeft: "20px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "none",
            width: "50%",
          }}
        />

        {/* Username */}
        <span style={{ marginLeft: "auto", fontWeight: "bold", marginRight: "10px" }}>
          {username}
        </span>
      </div>

      {sidebar && <Sidebar close={() => setSidebar(false)} />}

      {/* VIDEO LIST */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {filtered.map((v) => (
          <div
            key={v.id}
            onClick={() => openVideo(v.id)} // OPEN SINGLE VIDEO PAGE
            style={{
              width: "60%",
              backgroundColor: "#fff",
              margin: "15px 0",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              cursor: "pointer",
            }}
          >
            {/* SQUARE VIDEO */}
            <div
              style={{
                width: "100%",
                paddingTop: "50%",
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <iframe
                src={v.url}
                title={v.title}
                onLoad={() => saveToHistory(v.id)}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              ></iframe>
            </div>

            <h3 style={{ marginTop: "15px" }}>{v.title}</h3>

            {/* LIKE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(v.id);
              }}
            >
              {liked.includes(v.id) ? "❤️ Unlike" : "🤍 Like"}
            </button>

            {/* SUBSCRIBE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleSubscribe(v.id);
              }}
              style={{ marginLeft: "15px" }}
            >
              {subscribed.includes(v.id) ? "🔕 Unsubscribe" : "🔔 Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vedio;
