// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Vedio from "./Components/Vedio";
import Liked from "./Components/Liked";
import Subscribed from "./Components/Subscribed";
import History from "./Components/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vedio" element={<Vedio />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/subscribed" element={<Subscribed />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
