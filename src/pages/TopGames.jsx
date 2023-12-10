import React from "react";

function TopGames() {
  return (
    <div className="topGmsMstrDiv">
      <section className="topGmsTitle">
        <h1>Top Games of all Time</h1>
      </section>

      <h2 className="gmTitle">Age Of Empires II: The Age of Kings (1999)</h2>

      <section id="game1" className="topGames">
        <div className="topGmImgDiv">
          <img
            className="topGmImg"
            src={
              "https://upload.wikimedia.org/wikipedia/en/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png"
            }
            alt=""
          />
        </div>

        <div className="gmDescription">
          <h3>
            Is a real-time strategy video game developed by Ensemble Studios and
            published by Microsoft. Released in 1999 for Microsoft Windows and
            Macintosh in 2001, it is the second game in the Age of Empires
            series. The Age of Kings is set in the Middle Ages and contains
            thirteen playable civilizations. Players aim to gather resources,
            which they use to build towns, create armies, and defeat their
            enemies. There are five historically based campaigns, which
            conscript the player to specialized and story-backed conditions, as
            well as three additional single-player game modes; multiplayer is
            also supported. 
          </h3>

        </div>
      </section>
          <h3 className="gmDescription">
          Reception of Age of Empires II was highly positive.
            The significant number of new features was praised, as were the
            gameplay improvements. The game received "universal acclaim"
            according to video game review aggregator Metacritic. Three months
            after its release, two million copies of Age of Empires II had been
            shipped, and it topped sales charts in seven countries. The game won
            multiple awards and is today considered a classic of its type,
            having had a significant impact on future games in its genre. The
            original Age of Empires II and its 2000 expansion pack, The
            Conquerors, were later released as The Gold Edition. Age of Empires
            II is often considered one of the greatest games ever made.
          </h3>
    </div>
  );
}

export default TopGames;
