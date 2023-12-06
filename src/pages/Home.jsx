import React from "react";

function Home() {
  return (
    <div>
      <div className="homeInfo">
        <h1>Game Finder</h1>

        <img
          className="homeImg"
          src={
            "https://wallpapers.com/images/hd/80s-aesthetic-dcinaahccs5hc4nn.jpg"
          }
          alt=""
        />

        <section className="whtIsGmFndr">
          <h3>What is Game Finder</h3>
          <p>
            Here you will be able to search for any game you could have ever
            imagined. We have all relevant information that you need!
          </p>

            <ul className="relevantInfoList">
              <div>
                <li>~ Name</li>
                <li>~ Platforms</li>
                <li>~ Generes</li>
              </div>

              <div>
                <li>~ Stores</li>
                <li>~ Released Date</li>
                <li>~ Game Screenshots</li>
              </div>
            </ul>
          </section>

        <section>
          <h3>Why Game Finder</h3>
        </section>
      </div>
    </div>
  );
}

export default Home;
