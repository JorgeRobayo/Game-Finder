import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Search from "./pages/Search"
import GameDetails from "./pages/GameDetails";


function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/game/:name" element={GameDetails}></Route>
      </Routes>

    </div>
  );
}

export default App;
