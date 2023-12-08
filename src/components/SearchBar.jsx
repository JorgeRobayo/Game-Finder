import React from "react";
import { useState } from "react";
import Results from "./Results";
import { useEffect } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameResults([]);
    fetch(
      `https://api.rawg.io/api/games?search=${slug}&key=270a250046034f97a6940f3241a34200`
    )
      .then((resp) => resp.json())
      .then(({ results }) => {
        results === undefined
          ? alert("No games found")
          : setGameResults(results);
      });

    setSearchTerm("");
  };

  console.log(gameResults);

  return (
    <div>
      
      <div className="searchBar">
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <input type="submit"></input>
        </form>

        
      </div>
      <Results gameResults={gameResults} />
    </div>
  );
}

export default SearchBar;
