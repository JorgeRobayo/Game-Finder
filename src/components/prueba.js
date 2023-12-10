const handleGame = async (game) => {
    const detailedInfo = await getGmDescription(game.id)

    setCurrentData(detailedInfo)
    console.log('gameinfo', detailedInfo)
    console.log('hello world')
  }

  const getGmDescription = async (gameId) => {
    const url = `https://api.rawg.io/api/games/${gameId}?key=270a250046034f97a6940f3241a34200`;

    try {
      const response = await fetch(url);
      const gameDescResult = await response.json();

      return gameDescResult;
      }catch (error) {
        console.log('error:', error)
      }
  };

  //========================




//   Hello, I am working on a reazct app project that is called Game Finder, The goal of this game is to fetch data from The Rawg Games API. The website has 3 main pages: 

// The Home page displays basic inofrmastion about the website:

// code:

// import React from "react";

// function Home() {
//   return (
//     <div>
//       <div className="homeInfo">
//         <h1>Game Finder</h1>

//         <img
//           className="homeImg"
//           src={
//             "https://wallpapers.com/images/hd/80s-aesthetic-dcinaahccs5hc4nn.jpg"
//           }
//           alt=""
//         />

//         <section className="whtIsGmFndr">
//           <h3>What is Game Finder</h3>
//           <p>
//             Here you will be able to search for any game you could have ever
//             imagined. We have all relevant information that you need!
//           </p>

//             <ul className="relevantInfoList">
//               <div>
//                 <li>~ Name</li>
//                 <li>~ Platforms</li>
//                 <li>~ Generes</li>
//               </div>

//               <div>
//                 <li>~ Stores</li>
//                 <li>~ Released Date</li>
//                 <li>~ Game Screenshots</li>
//               </div>
//             </ul>
//           </section>

//         <section className="whyGmFndr">
//           <h3>Why Game Finder</h3>
//           <p>~ Aren't you tired of intrusive ads that take all your screen?
//             Here we are ad-friendly.
//           </p>
          
//           <p>~ We have a user friendly Interface</p>

//           <p>~ Reliable Information</p>
//         </section>

        
//       </div>
//     </div>
//   );
// }

// export default Home;


// In the Seach page there is a Search bar component, once the user searches for a game it displays a component called Results that displays the Poster and the Name of the desired game as a link that sends to a different page called game information. The Game information page dsplays further information about tha game searched. 


// Search page Code:

// import React from "react";
// import SearchBar from "../components/SearchBar";

// function Search() {
//   return (
//     <div>
//       <section>
//         <section className="search">
//           <h1>Search Page</h1>

//           <img
//             className="srchImg"
//             src={
//               "https://64.media.tumblr.com/e642f1a4554b60222d12dcac2a37777d/25a8e056a8a41d67-ea/s400x600/75ac973e614f765f4f32d885785b776aea266374.gif"
//             }
//             alt=""
//           />

//           <SearchBar />
//         </section>

//         {/* <h2>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
//           praesentium, laboriosam officia sint est eum temporibus, dolorum esse
//           consequatur reiciendis inventore neque hic nesciunt, ut exercitationem
//           quaerat molestiae ad reprehenderit. Dolorem corrupti quam officia
//           quaerat laudantium et vitae dolorum! Adipisci?
//         </h2> */}
//       </section>
//     </div>
//   );
// }

// export default Search;


// Game deteails page:

// import React, { useState } from "react";
// import { useContext } from "react";
// import { dataContext } from "../components/Context";

// function GameDetails(props) {
//   // const { game, setGame } = useState(null);

//   const { currentData, setCurrentData } = useContext(dataContext);

//   return (
//     <div className="gmDetails">
//       <section className="gmName">
//         <h1>{currentData.name}</h1>
//       </section>

//       <h3>Game Screenshots</h3>
//       <section className="gmScrshtDiv">
//         {currentData.short_screenshots.map((ss) => (
//           <div>
//             <div>
//               <img className="gmScrsht" src={ss.image} alt="screenshot" />
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="mstrSection">
//         <section className="gmRlsdDate">
//           <h3>Released</h3>
//           <p>{currentData.released}</p>
//         </section>

//         <section className="gmRtng">
//           <h3>Rating</h3>
//           <p>{currentData.rating}</p>
//         </section>

//         <section className="gmGnrs">
//           <h3>Genere(s)</h3>
//           <div className="gmGnrsMap">
//             {currentData.genres.map((g) => `${g.name} | `)}
//           </div>
//         </section>

//         <section className="gmPltfrm">
//           <h3>Platform(s)</h3>
//           <div className="gmPltfrmMap">
//             {currentData.platforms.map((p) => `${p.platform.name} | `)}
//           </div>
//         </section>

//         <section className="gmStrs">
//           <h3>Stores</h3>
//           <div className="gmStrsMap">
//             {currentData.stores.map((str) => `${str.store.name} | `)}
//           </div>
//         </section>

//         <section className="gmDscrptn">
//             <h3>Description</h3>
//             <p>
//               {console.log(currentData)}
//               {currentData.description} 
//             </p>
//           </section>
//       </section>
//     </div>
//   );
// }

// export default GameDetails;


// Results component:

// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { dataContext } from "./Context";

// function Results(props) {
//   const { currentData, setCurrentData } = useContext(dataContext);

//   return (
//     <div className="masterGmContainer">
//       <div className="gamesContainer">
//         {props.gameResults.map((game) => (
//           <div key={game.id}>
//             <Link
//               to="/gamedetails"
//               onClick={() => {
//                 setCurrentData(game);
//                 console.log(currentData);
//               }}
//             >
//               <section className="gmCard">
//                 <img
//                   className="gameImg"
//                   src={game.background_image}
//                   alt="game"
//                 />
//                 <h3 className="gmNameRslts">{game.name}</h3>
//               </section>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Results;

// Search bar component:

// import React from "react";
// import { useState, useContext } from "react";
// import Results from "./Results";
// import { dataContext } from "./Context";


// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [gameResults, setGameResults] = useState([]);
//   const { setCurrentData} = useContext(dataContext)

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     let slug = searchTerm.split(" ").join("-").toLowerCase();

//     setGameResults([]);
//     fetch(
//       `https://api.rawg.io/api/games?search=${slug}&key=270a250046034f97a6940f3241a34200`
//     )
//       .then((resp) => resp.json())
//       .then(({ results }) => {
//         results === undefined
//           ? alert("No games found")
//           : setGameResults(results);
//       });

//     setSearchTerm("");
//   };
  
//   // const handleGame = async (game) => {
//   //   const detailedInfo = await getGmDescription(game.Id)

//   //   setCurrentData(detailedInfo)
//   //   console.log('gameinfo', detailedInfo)
//   //   console.log('hello world')
//   // }

//   // const getGmDescription = async (gameId) => {
//   //   const url = `https://api.rawg.io/api/games/${gameId}?key=270a250046034f97a6940f3241a34200`;

//   //   try {
//   //     const response = await fetch(url);

//   //     if (!response.ok){
//   //       throw new Error(`request error ${response.status}`)
//   //     }
//   //     const gameDescResult = await response.json();

//   //     console.log('API response', gameDescResult)

//   //     return gameDescResult;
//   //     }catch (error) {
//   //       console.error('error:', error)
//   //       return null
//   //     }
//   // };
 
//   console.log(gameResults);
 

//   return (
//     <div>
      
//       <div className="searchBar">
//         <form onSubmit={onSubmit}>
//           <input type="text" value={searchTerm} onChange={handleChange} />
//           <input type="submit"></input>
//         </form>

        
//       </div>
//       <Results gameResults={gameResults}  />
  
//     </div>
//   );
// }

// export default SearchBar;

// Nav component:

// import React from "react";
// import {Link} from 'react-router-dom'


// function Nav() {
//   return (
//     <div className="nav">
      
//       <Link to="/">
//         <div>Home</div>
//       </Link>

      

//       <Link to="/search">
//         <div>Search</div>
//       </Link>


//     </div>
//   );
// }

// export default Nav;


// Context Component:

// import React from 'react'
// import { createContext } from 'react'
// import { useState } from 'react'

// export const dataContext = createContext() 

// function ContextProvider(props) {

//     const [currentData, setCurrentData] = useState()

//   return (
//     <dataContext.Provider value={{currentData, setCurrentData}}>
//         {
//             props.children
//         }
//     </dataContext.Provider>
//   )
// }

// export default ContextProvider

// In my first Fetch request I am Obtaining the basic information of the game searched

// documentation from Rawg Games Website:


// page	
// integer
// A page number within the paginated result set.

// page_size	
// integer
// Number of results to return per page.

// search	
// string
// Search query.

// search_precise	
// boolean
// Disable fuzziness for the search query.

// search_exact	
// boolean
// Mark the search query as exact.

// parent_platforms	
// string
// Filter by parent platforms, for example: 1,2,3.

// platforms	
// string
// Filter by platforms, for example: 4,5.

// stores	
// string
// Filter by stores, for example: 5,6.

// developers	
// string
// Filter by developers, for example: 1612,18893 or valve-software,feral-interactive.

// publishers	
// string
// Filter by publishers, for example: 354,20987 or electronic-arts,microsoft-studios.

// genres	
// string
// Filter by genres, for example: 4,51 or action,indie.

// tags	
// string
// Filter by tags, for example: 31,7 or singleplayer,multiplayer.

// creators	
// string
// Filter by creators, for example: 78,28 or cris-velasco,mike-morasky.

// dates	
// string
// Filter by a release date, for example: 2010-01-01,2018-12-31.1960-01-01,1969-12-31.

// updated	
// string
// Filter by an update date, for example: 2020-12-01,2020-12-31.

// platforms_count	
// integer
// Filter by platforms count, for example: 1.

// metacritic	
// string
// Filter by a metacritic rating, for example: 80,100.

// exclude_collection	
// integer
// Exclude games from a particular collection, for example: 123.

// exclude_additions	
// boolean
// Exclude additions.

// exclude_parents	
// boolean
// Exclude games which have additions.

// exclude_game_series	
// boolean
// Exclude games which included in a game series.

// exclude_stores	
// string
// Exclude stores, for example: 5,6.

// ordering	
// string
// Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.

// Responses
// 200
// RESPONSE SCHEMA: application/json
// count
// required
// integer
// next	
// string <uri> Nullable
// previous	
// string <uri> Nullable
// results
// required
// Array of objects (Game)

// code provided by the website: https://api.rawg.io/api/games

// code snipped provided by Rapid Api: 

// const fetch = require('node-fetch');

// const url = 'https://rawg-video-games-database.p.rapidapi.com/games';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '377de65019msh16c9ce023054f5dp1f9ac0jsnda3703451694',
//     'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// I











