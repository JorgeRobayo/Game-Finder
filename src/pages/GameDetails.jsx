import React, { useState } from "react";
import { useContext } from "react";
import { dataContext } from "../components/Context";

function GameDetails(props) {
  // const { game, setGame } = useState(null);

  const { currentData, setCurrentData } = useContext(dataContext);

  return (
    <div className="gmDetails">
      <section className="gmName">
        <h1>{currentData.name}</h1>
      </section>

      <h3>Game Screenshots</h3>
      <section className="gmScrshtDiv">
        {currentData.short_screenshots.map((ss) => (
          <div>
            <div>
              <img className="gmScrsht" src={ss.image} alt="screenshot" />
            </div>
          </div>
        ))}
      </section>

      <section className="mstrSection">
        <section className="gmRlsdDate">
          <h3>Released</h3>
          <p>{currentData.released}</p>
        </section>

        <section className="gmRtng">
          <h3>Rating</h3>
          <p>{currentData.rating}</p>
        </section>

        <section className="gmGnrs">
          <h3>Genere(s)</h3>
          <div className="gmGnrsMap">
            {currentData.genres.map((g) => `${g.name} | `)}
          </div>
        </section>

        <section className="gmPltfrm">
          <h3>Platform(s)</h3>
          <div className="gmPltfrmMap">
            {currentData.platforms.map((p) => `${p.platform.name} | `)}
          </div>
        </section>

        <section className="gmStrs">
          <h3>Stores</h3>
          <div className="gmStrsMap">
            {currentData.stores.map((str) => `${str.store.name} | `)}
          </div>
        </section>

        <section className="gmDscrptn">
            <h3>Description</h3>
            <p>
              {console.log(currentData)}
              {currentData.description} 
            </p>
          </section>
      </section>
    </div>
  );
}

export default GameDetails;
