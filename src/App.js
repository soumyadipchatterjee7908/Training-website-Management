import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import About from "./Pages/About/About";
import Courses from "./Pages/Courses/Courses";
import Contact from "./Pages/Contact/Contact";
import NavBar from "./NavBar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import "./App.css";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
