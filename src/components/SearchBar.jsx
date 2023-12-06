import React from "react";
import { useState } from "react";
import Results from "./Results";

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
    fetch(`https://api.rawg.io/api/games?search=${slug}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        results === undefined
          ? alert("no games found")
          : setGameResults(results);
      });

    setSearchTerm("");
  };

  return (
    <div className="searchBar">
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <input type="submit"></input>
      </form>

      <Results gameResults={gameResults} />
    </div>
  );
}

export default SearchBar;
