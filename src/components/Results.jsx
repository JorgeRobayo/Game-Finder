import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./Context";

function Results(props) {
  const { currentData, setCurrentData } = useContext(dataContext);

  return (
    <div className="masterGmContainer">
      <div className="gamesContainer">
        {props.gameResults.map((game) => (
          <div key={game.id}>
            <Link
              to="/gamedetails"
              onClick={() => {
                setCurrentData(game);
                console.log(currentData);
              }}
            >
              <section className="gmCard">
                <img
                  className="gameImg"
                  src={game.background_image}
                  alt="game"
                />
                <h3 className="gmNameRslts">{game.name}</h3>
              </section>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
