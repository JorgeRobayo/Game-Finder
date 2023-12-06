import React from 'react'
import { Link } from 'react-router-dom'

function Results(props) {
  return (
    <div>
        <ul>
            {
                props.gameResults.map(game => (
                    <li key={game.id}>

                        <Link to={{
                            pathname: `/game/${game.name}`,
                            gameProps:{
                                game: game
                            }
                        }}>

                        <h3>{game.name}</h3>
                        <img src={game.background_image} alt="game" />
                        </Link>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Results