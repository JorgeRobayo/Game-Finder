import React from "react";

function GameDetails(props) {
  const {game} = props.location.gameProps

  return (
    <div>
      <h1>{game.name}</h1>

      <h2>Released</h2>
      <p>{game.released}</p>

      <h2>Rating</h2>
      <p>{game.rating}</p>

      <h3>Genere(s)</h3>
      {
        game.genres.map(g => `${g.name} |`)
      }

      <h3>Platform(s)</h3>
      {
        game.platforms.map(p => `${p.platform.name}`)
      }

      <h3>Game Screenshots</h3>
      <ul>
        {
          game.short_screenshots.map(ss => <li><img src={ss.image} alt="screenshot" /></li>)
        }
      </ul>
    </div>
  );
}

export default GameDetails;
