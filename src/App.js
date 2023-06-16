import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPokemons from "./components/MyPokemons.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/MyPokemons" element={<MyPokemons />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;