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

  const onSubmit = async (e) => {
    e.preventDefault();
    let slug = searchTerm.split(" ").join("-").toLowerCase();

    setGameResults([]);
    
    try{
      const response = await fetch (
        `https://api.rawg.io/api/games?search=${slug}&key=270a250046034f97a6940f3241a34200`
      );

      const {results} = await response.json();

      if (results === undefined) {

        alert("No Games Found")

      } else {
        setGameResults(results)
        const gameId = results.Id
        await getGmDescription(gameId)
      }

    } catch (error) {
      console.error(`Error fetching results`, error)
    }
  

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

      setCurrentData(gameDescResult)
  } catch (error) {
    console.error('error getting gme details:', error)
  }
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
      <Results gameResults={gameResults}  />
  
    </div>
  );
}

export default SearchBar;
