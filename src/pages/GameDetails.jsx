import React, {  useState } from "react";
import { useContext } from "react";
import { dataContext } from "../components/Context";

function GameDetails(props) {
  // const { game, setGame } = useState(null);

  const {currentData, setCurrentData} = useContext(dataContext)

  return (
    <div>
      <h1>{currentData.name}</h1>

      {/* <h2>Released</h2>
      <p>{currentData.released}</p> */}

      <h2>Rating</h2>
      <p>{currentData.rating}</p>

      {/* <h3>Genere(s)</h3>
      {currentData.genres.map((g) => `${g.name} |`)} */}

      <h3>Platform(s)</h3>
      {currentData.platforms.map((p) => `${p.platform.name}`)}

      {/* <h3>Game Screenshots</h3>
      <ul>
        {currentData.short_screenshots.map((ss) => (
          <li>
            <img src={ss.image} alt="screenshot" />
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default GameDetails;
