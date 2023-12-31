import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Search from "./pages/Search"
import GameDetails from "./pages/GameDetails";
import TopGames from "./pages/TopGames";


function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search/>}></Route>
        {/* <Route path="/game/:name" element={<GameDetails/>}></Route> */}
        <Route path="/gamedetails" element={<GameDetails/>}></Route>
        <Route path="/topgames" element={<TopGames/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
