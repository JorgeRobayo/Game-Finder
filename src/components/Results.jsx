import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./Context";

function Results(props) {
  const { currentData, setCurrentData } = useContext(dataContext);

  return (
    <div >
      <ul className="gameContainer">
        {props.gameResults.map((game) => (
          <li key={game.id}>
            <Link
              to="/gamedetails"
              onClick={() => {
                setCurrentData(game);
                console.log(currentData);
              }}
            >
              <section>
                  <img
                    className="gameImg"
                    src={game.background_image}
                    alt="game"
                  />
                  <h3>{game.name}</h3>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
