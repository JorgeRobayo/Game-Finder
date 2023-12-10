import React from "react";
import { useState, useContext } from "react";
import Results from "./Results";
import { dataContext } from "./Context";


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);
  const { setCurrentData} = useContext(dataContext)

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
  
  const handleGame = async (game) => {
    const detailedInfo = await getGmDescription(game.Id)

    setCurrentData(detailedInfo)
    console.log('gameinfo', detailedInfo)
    console.log('hello world')
  }

  const getGmDescription = async (gameId) => {
    const url = `https://api.rawg.io/api/games/${gameId}?key=270a250046034f97a6940f3241a34200`;

    try {
      const response = await fetch(url);

      if (!response.ok){
        throw new Error(`request error ${response.status}`)
      }
      const gameDescResult = await response.json();

      console.log('API response', gameDescResult)

      return gameDescResult;
      }catch (error) {
        console.error('error:', error)
        return null
      }
  };
 
  // console.log(gameResults);
 

  return (
    <div>
      
      <div className="searchBar">
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} />
          <input type="submit"></input>
        </form>

        
      </div>
      <Results gameResults={gameResults}  OnGameClick={handleGame}/>
  
    </div>
  );
}

export default SearchBar;
