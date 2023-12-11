import React from "react";

function TopGames() {
  return (
    <div className="topGmsMstrDiv">
      <section className="topGmsTitle">
        <h1>Top Games of all Time</h1>
      </section>

      <h2 className="gmTitle">Age Of Empires II: The Age of Kings (1999)</h2>

      <div className="cntnrtRight">
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
              Is a real-time strategy video game developed by Ensemble Studios
              and published by Microsoft. Released in 1999 for Microsoft Windows
              and Macintosh in 2001, it is the second game in the Age of Empires
              series. The Age of Kings is set in the Middle Ages and contains
              thirteen playable civilizations. Players aim to gather resources,
              which they use to build towns, create armies, and defeat their
              enemies. There are five historically based campaigns, which
              conscript the player to specialized and story-backed conditions,
              as well as three additional single-player game modes; multiplayer
              is also supported.
            </h3>
          </div>
        </section>

        <section>
          <h3 id="game1Description2" className="gmDescription">
            Reception of Age of Empires II was highly positive. The significant
            number of new features was praised, as were the gameplay
            improvements. The game received "universal acclaim" according to
            video game review aggregator Metacritic. Three months after its
            release, two million copies of Age of Empires II had been shipped,
            and it topped sales charts in seven countries. The game won multiple
            awards and is today considered a classic of its type, having had a
            significant impact on future games in its genre. The original Age of
            Empires II and its 2000 expansion pack, The Conquerors, were later
            released as The Gold Edition. Age of Empires II is often considered
            one of the greatest games ever made.
          </h3>
        </section>
      </div>
      
      
      <h2 className="gmTitle">Super Mario Bros (1985)</h2>
      

      <div className="cntnrReverse">
        <section id="game2" className="topGamesReversed">
        <div className="topGmImgDiv">
          <img
            className="topGmImg"
            src={
              "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png"
            }
            alt=""
          />
        </div>

        <div className="gmDescription">
          <h3>
            Players control Mario, or his brother Luigi in the multiplayer mode,
            as they traverse the Mushroom Kingdom to rescue Princess Toadstool
            from King Koopa. They traverse side-scrolling stages while avoiding
            hazards such as enemies and pits with the aid of power-ups such as
            the Super Mushroom, Fire Flower, and Starman.
          </h3>

          <h3>
            The game was designed by Shigeru Miyamoto and Takashi Tezuka as "a
            grand culmination" of the Famicom team's three years of game
            mechanics and programming, drawing from their experiences working on
            Devil World and the side-scrollers Excitebike and Kung Fu to advance
            their previous work on platforming "athletic games" such as Donkey
            Kong and Mario Bros. The design of the first level, World 1-1,
            serves as a tutorial for platform gameplay.
          </h3>
        </div>
      </section>
      </div>


      <h3 className="gmTitle">Mass Effect (2007)</h3>

      <div className="cntnrtRight">
       
      <section id="game3" className="topGames">
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
              Is a real-time strategy video game developed by Ensemble Studios
              and published by Microsoft. Released in 1999 for Microsoft Windows
              and Macintosh in 2001, it is the second game in the Age of Empires
              series. The Age of Kings is set in the Middle Ages and contains
              thirteen playable civilizations. Players aim to gather resources,
              which they use to build towns, create armies, and defeat their
              enemies. There are five historically based campaigns, which
              conscript the player to specialized and story-backed conditions,
              as well as three additional single-player game modes; multiplayer
              is also supported.
            </h3>
          </div>
        </section>

        <section>
          <h3 id="game1Description2" className="gmDescription">
            Reception of Age of Empires II was highly positive. The significant
            number of new features was praised, as were the gameplay
            improvements. The game received "universal acclaim" according to
            video game review aggregator Metacritic. Three months after its
            release, two million copies of Age of Empires II had been shipped,
            and it topped sales charts in seven countries. The game won multiple
            awards and is today considered a classic of its type, having had a
            significant impact on future games in its genre. The original Age of
            Empires II and its 2000 expansion pack, The Conquerors, were later
            released as The Gold Edition. Age of Empires II is often considered
            one of the greatest games ever made.
          </h3>
        </section>
      </div>
      
    </div>
  );
}

export default TopGames;
