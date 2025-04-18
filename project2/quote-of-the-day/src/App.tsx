import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favourites";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

