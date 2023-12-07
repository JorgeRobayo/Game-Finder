import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./Context";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Results(props) {
  const { currentData, setCurrentData } = useContext(dataContext);

  //this object tells the responsivenes of the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <section className="gameContainer">
        <Carousel responsive={responsive}>
          {props.gameResults.map((game) => (
            <div key={game.id}>
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
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Results;
