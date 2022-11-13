import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlaceToStay from "./components/PlaceToStay";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
