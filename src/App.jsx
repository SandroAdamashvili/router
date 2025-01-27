import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Gallery from "./components/Gallery.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:name" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
